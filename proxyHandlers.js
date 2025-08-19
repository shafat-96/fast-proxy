import axios from 'axios';
import segmentCache from './cache.js';
import { generateHeadersForDomain } from './domainTemplates.js';

const webServerUrl = process.env.PUBLIC_URL || `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;

// Helper to generate request headers
function generateRequestHeaders(url, additionalHeaders = {}) {
  let requestHeaders = {};
  try {
    const urlObj = new URL(url);
    requestHeaders = generateHeadersForDomain(urlObj);
    Object.assign(requestHeaders, additionalHeaders);
  } catch (urlError) {
    requestHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate',
      'Connection': 'keep-alive',
      ...additionalHeaders
    };
  }
  return requestHeaders;
}

// Common handler for URL and headers validation
function validateRequest(req) {
  const { url, headers } = req.query;
  if (!url) {
    throw new Error('URL parameter is required');
  }
  let parsedHeaders = {};
  if (headers) {
    try {
      parsedHeaders = JSON.parse(decodeURIComponent(headers));
    } catch (e) {
      // Ignore invalid headers
    }
  }
  return { url, parsedHeaders };
}

// Common error response handler
function sendError(res, message, details) {
  console.error(`${message}:`, details);
  res.status(500).json({ error: message, details });
}

export async function m3u8ProxyHandler(req, res) {
  try {
    const { url, parsedHeaders } = validateRequest(req);
    const requestHeaders = generateRequestHeaders(url, parsedHeaders);
    const response = await axios.get(url, { headers: requestHeaders });

    let m3u8Content = response.data;
    const lines = m3u8Content.split('\n');
    const newLines = [];

    for (const line of lines) {
      if (line.startsWith('#')) {
        if (line.includes('URI=')) {
          const uriMatch = line.match(/URI="([^"]+)"/);
          if (uriMatch && uriMatch[1]) {
            const originalUri = uriMatch[1];
            const encodedHeaders = encodeURIComponent(JSON.stringify(requestHeaders));
            const newUri = `${webServerUrl}/ts-proxy?url=${encodeURIComponent(originalUri)}&headers=${encodedHeaders}`;
            newLines.push(line.replace(originalUri, newUri));
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      } else if (line.trim() !== '') {
        try {
          const resolvedUrl = new URL(line, url).href;
          const encodedHeaders = encodeURIComponent(JSON.stringify(requestHeaders));
          const newUrl = line.endsWith('.m3u8')
            ? `${webServerUrl}/proxy?url=${encodeURIComponent(resolvedUrl)}&headers=${encodedHeaders}`
            : `${webServerUrl}/ts-proxy?url=${encodeURIComponent(resolvedUrl)}&headers=${encodedHeaders}`;
          newLines.push(newUrl);
        } catch (urlError) {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }

    res.header('Content-Type', 'application/vnd.apple.mpegurl');
    res.send(newLines.join('\n'));
  } catch (error) {
    if (error.message === 'URL parameter is required') {
      return res.status(400).json({ error: error.message });
    }
    sendError(res, 'Failed to proxy m3u8 content', error.message);
  }
}

export async function tsProxyHandler(req, res) {
  try {
    const { url, parsedHeaders } = validateRequest(req);
    const requestHeaders = generateRequestHeaders(url, parsedHeaders);
    const cacheKey = `ts:${url}`;
    const cachedData = segmentCache.get(cacheKey);

    if (cachedData) {
      res.header('X-Cache', 'HIT');
      res.status(cachedData.status);
      for (const [key, value] of Object.entries(cachedData.headers)) {
        res.header(key, value);
      }
      return res.send(cachedData.data);
    }

    const response = await axios({
      method: 'GET',
      url,
      headers: requestHeaders,
      responseType: 'stream'
    });

    res.header('X-Cache', 'MISS');
    res.header('Cache-Control', 'public, max-age=300');
    if (url.endsWith('.ts')) {
      res.header('Content-Type', 'video/mp2t');
    } else if (url.endsWith('.m3u8')) {
      res.header('Content-Type', 'application/vnd.apple.mpegurl');
    } else {
      res.header('Content-Type', 'application/octet-stream');
    }
    res.status(response.status);

    const responseData = {
      status: response.status,
      headers: {
        'Content-Type': response.headers['content-type'],
        'Cache-Control': 'public, max-age=300'
      },
      data: []
    };

    response.data.on('data', chunk => responseData.data.push(chunk));
    response.data.on('end', () => {
      responseData.data = Buffer.concat(responseData.data);
      segmentCache.set(cacheKey, responseData);
    });

    response.data.pipe(res);
  } catch (error) {
    if (error.message === 'URL parameter is required') {
      return res.status(400).json({ error: error.message });
    }
    sendError(res, 'Failed to proxy segment', error.message);
  }
}

export async function mp4ProxyHandler(req, res) {
  try {
    const { url, parsedHeaders } = validateRequest(req);

    // Forward Range header if provided by the client
    const rangeHeader = req.headers['range'];

    const requestHeaders = generateRequestHeaders(url, {
      ...parsedHeaders,
      ...(rangeHeader ? { Range: rangeHeader } : {}),
    });

    // Stream the response; let axios handle redirects (default max 5)
    const response = await axios({
      method: 'GET',
      url,
      headers: requestHeaders,
      responseType: 'stream',
      validateStatus: () => true, // we will forward the status (e.g., 206)
      maxRedirects: 5,
    });

    // Set CORS and pass-through important headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Range');

    // Use upstream headers when available
    const upstreamType = response.headers['content-type'] || 'video/mp4';
    const upstreamLength = response.headers['content-length'];
    const upstreamRange = response.headers['content-range'];
    const upstreamAcceptRanges = response.headers['accept-ranges'] || 'bytes';

    res.setHeader('Content-Type', upstreamType);
    if (upstreamLength) res.setHeader('Content-Length', upstreamLength);
    if (upstreamRange) res.setHeader('Content-Range', upstreamRange);
    if (upstreamAcceptRanges) res.setHeader('Accept-Ranges', upstreamAcceptRanges);
    res.setHeader('Content-Disposition', 'inline');

    // Forward status (e.g., 200 or 206 Partial Content)
    res.status(response.status);

    response.data.on('error', (err) => {
      // In case streaming fails mid-way
      if (!res.headersSent) {
        sendError(res, 'Upstream stream error', err.message);
      } else {
        res.destroy(err);
      }
    });

    response.data.pipe(res);
  } catch (error) {
    if (error.message === 'URL parameter is required') {
      return res.status(400).json({ error: error.message });
    }
    sendError(res, 'Failed to proxy mp4 content', error.message);
  }
}