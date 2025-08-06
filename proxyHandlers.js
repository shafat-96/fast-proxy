import axios from 'axios';
import segmentCache from './cache.js';
import { generateHeadersForDomain } from './domainTemplates.js';

const webServerUrl = process.env.PUBLIC_URL || `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;

// Helper function to generate request headers
function generateRequestHeaders(url, additionalHeaders = {}) {
  let requestHeaders = {};
  try {
    const urlObj = new URL(url);
    requestHeaders = generateHeadersForDomain(urlObj);
    // Merge with any additional headers provided
    Object.assign(requestHeaders, additionalHeaders);
  } catch (urlError) {
    // Fallback to basic headers if URL parsing fails
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

export async function m3u8ProxyHandler(req, res) {
  try {
    const { url, headers } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    // Parse headers if provided
    let parsedHeaders = {};
    if (headers) {
      try {
        parsedHeaders = JSON.parse(decodeURIComponent(headers));
      } catch (e) {
        // Ignore invalid headers
      }
    }
    
    // Generate domain-specific headers
    const requestHeaders = generateRequestHeaders(url, parsedHeaders);
    
    // Fetch the m3u8 content
    const response = await axios.get(url, { headers: requestHeaders });
    
    let m3u8Content = response.data;
    
    // Process the m3u8 content to rewrite URLs
    const lines = m3u8Content.split('\n');
    const newLines = [];
    
    for (const line of lines) {
      if (line.startsWith('#')) {
        // Handle tags with URLs
        if (line.includes('URI=')) {
          // Handle #EXT-X-KEY and similar tags with URI attributes
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
        // Handle URL lines (segment URLs)
        try {
          // Resolve relative URLs
          const resolvedUrl = new URL(line, url).href;
          const encodedHeaders = encodeURIComponent(JSON.stringify(requestHeaders));
          
          // Determine if it's an m3u8 or ts segment
          if (line.endsWith('.m3u8')) {
            const newUrl = `${webServerUrl}/proxy?url=${encodeURIComponent(resolvedUrl)}&headers=${encodedHeaders}`;
            newLines.push(newUrl);
          } else {
            const newUrl = `${webServerUrl}/ts-proxy?url=${encodeURIComponent(resolvedUrl)}&headers=${encodedHeaders}`;
            newLines.push(newUrl);
          }
        } catch (urlError) {
          // If URL resolution fails, keep original line
          newLines.push(line);
        }
      } else {
        // Keep empty lines
        newLines.push(line);
      }
    }
    
    // CORS headers are now handled by the server middleware
    res.header('Content-Type', 'application/vnd.apple.mpegurl');
    
    res.send(newLines.join('\n'));
  } catch (error) {
    console.error('M3U8 Proxy Error:', error.message);
    res.status(500).json({ error: 'Failed to proxy m3u8 content', details: error.message });
  }
}

export async function tsProxyHandler(req, res) {
  try {
    const { url, headers } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    // Parse headers if provided
    let parsedHeaders = {};
    if (headers) {
      try {
        parsedHeaders = JSON.parse(decodeURIComponent(headers));
      } catch (e) {
        // Ignore invalid headers
      }
    }
    
    // Generate domain-specific headers
    const requestHeaders = generateRequestHeaders(url, parsedHeaders);
    
    // Fetch the segment content
    const response = await axios({
      method: 'GET',
      url: url,
      headers: requestHeaders,
      responseType: 'stream'
    });
    
    // CORS headers are now handled by the server middleware
    
    // Set content type based on file extension
    if (url.endsWith('.ts')) {
      res.header('Content-Type', 'video/mp2t');
    } else if (url.endsWith('.m3u8')) {
      res.header('Content-Type', 'application/vnd.apple.mpegurl');
    } else {
      res.header('Content-Type', 'application/octet-stream');
    }
    
    // Forward status code
    res.status(response.status);
    
    // Add cache control headers
    res.header('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes
    
    // Check if we have a cached response
    const cacheKey = `ts:${url}`;
    const cachedData = segmentCache.get(cacheKey);
    
    if (cachedData) {
      // Return cached data
      res.header('X-Cache', 'HIT');
      res.status(cachedData.status);
      for (const [key, value] of Object.entries(cachedData.headers)) {
        res.header(key, value);
      }
      return res.send(cachedData.data);
    }
    
    // Mark as cache miss
    res.header('X-Cache', 'MISS');
    
    // Collect response data for caching
    const responseData = {
      status: response.status,
      headers: {
        'Content-Type': response.headers['content-type'],
        'Cache-Control': 'public, max-age=300'
      },
      data: []
    };
    
    // Collect data chunks
    response.data.on('data', chunk => {
      responseData.data.push(chunk);
    });
    
    // Cache response when finished
    response.data.on('end', () => {
      // Convert data array to buffer
      responseData.data = Buffer.concat(responseData.data);
      // Cache the response
      const cacheKey = `ts:${url}`;
      segmentCache.set(cacheKey, responseData);
    });
    
    // Pipe the response
    response.data.pipe(res);
  } catch (error) {
    console.error('TS Proxy Error:', error.message);
    res.status(500).json({ error: 'Failed to proxy segment', details: error.message });
  }
}
