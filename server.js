import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { m3u8ProxyHandler, tsProxyHandler, mp4ProxyHandler } from './proxyHandlers.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Parse allowed origins from environment variable
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [];

// Custom CORS middleware for origin checking
const customCors = (req, res, next) => {
  const origin = req.headers.origin;
  
  // If no allowed origins are specified, allow all (*)
  if (allowedOrigins.length === 0) {
    res.header('Access-Control-Allow-Origin', '*');
  } 
  // If allowed origins are specified, check if the request origin is in the list
  else if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
};

// Middleware
app.use(customCors);
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'M3U8 Cross-Origin Proxy Server', 
    endpoints: {
      m3u8: '/proxy?url={m3u8_url}&headers={optional_headers}',
      ts: '/ts-proxy?url={ts_segment_url}&headers={optional_headers}',
      fetch: '/fetch?url={any_url}&ref={optional_referer}',
      mp4: '/mp4-proxy?url={mp4_url}&headers={optional_headers}'
    },
    allowedOrigins: allowedOrigins.length > 0 ? allowedOrigins : 'All (*)'
  });
});

app.get('/proxy', m3u8ProxyHandler);
app.get('/ts-proxy', tsProxyHandler);
app.get('/mp4-proxy', mp4ProxyHandler);
app.get("/fetch", async (req, res) => {
  try {
    const { url, ref } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    let refString = ref ? "&ref=" + encodeURIComponent(ref) : "";
    console.log(url);

    const fetchedResponse = await fetch(url, {
      headers: { 
        ...req.headers, 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '3600',
        Referer: ref ? ref : "" 
      },
    });

    let type = fetchedResponse.headers.get("Content-Type") || "text/plain";
    let responseBody = null;
    console.log(type);

    if (type.includes("text/vtt")) {
      console.log("VTT file found");
      responseBody = await fetchedResponse.text();

      const regex = /.+?\.(jpg)+/g;
      const matches = [...responseBody.matchAll(regex)];
      let fileNames = [];
      
      for (const match of matches) {
        const filename = match[0];
        if (!fileNames.includes(filename)) {
          fileNames.push(filename);
        }
      }

      if (fileNames.length > 0) {
        for (const filename of fileNames) {
          const newUrl = url.replace(/\/[^\/]*$/, `/${filename}`);
          responseBody = responseBody.replaceAll(filename, "/fetch?url=" + newUrl + refString);
        }
      }
    } else if (
      type.includes("application/vnd.apple.mpegurl") ||
      type.includes("application/x-mpegurl") ||
      type.includes("video/MP2T") ||
      type.includes("audio/mpegurl") ||
      type.includes("application/x-mpegURL") ||
      type.includes("audio/x-mpegurl") ||
      (type.includes("text/html") && (url.endsWith(".m3u8") || url.endsWith(".ts")))
    ) {
      responseBody = await fetchedResponse.text();
      if (!responseBody.startsWith("#EXTM3U")) {
        return res.status(fetchedResponse.status).send(responseBody);
      }
      console.log("HLS stream found");

      const regex = /\/[^\/]*$/;
      const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)[^\s/$.?#].[^\s]*$/i;
      const m3u8FileChunks = responseBody.split("\n");
      const m3u8AdjustedChunks = [];

      for (const line of m3u8FileChunks) {
        if (line.startsWith("#") || !line.trim()) {
          m3u8AdjustedChunks.push(line);
          continue;
        }

        let formattedLine = line;
        if (line.startsWith(".")) {
          formattedLine = line.substring(1);
        }

        if (formattedLine.match(urlRegex)) {
          console.log("TS or M3U8 files with URLs found, adding proxy path");
          m3u8AdjustedChunks.push(`/fetch?url=${encodeURIComponent(formattedLine)}${refString}`);
        } else {
          const newUrls = url.replace(regex, formattedLine.startsWith("/") ? formattedLine : `/${formattedLine}`);
          console.log("TS or M3U8 files with no URLs found, adding path and proxy path.");
          m3u8AdjustedChunks.push(`/fetch?url=${encodeURIComponent(newUrls)}${refString}`);
        }
      }
      responseBody = m3u8AdjustedChunks.join("\n");
    } else {
      responseBody = await fetchedResponse.arrayBuffer();
    }

    if (responseBody instanceof ArrayBuffer) {
      const body = new Uint8Array(responseBody);
      if (body.length > 0 && body[0] === 0x47) {
        console.log("disguised files found");
        type = "video/mp2t";
      }
    }

    res.set({
      'Content-Type': type,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '3600'
    });

    if (responseBody instanceof ArrayBuffer) {
      res.send(Buffer.from(responseBody));
    } else {
      res.send(responseBody);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Request failed", error: error.message });
  }
});

// Start server
app.listen(port, host, () => {
  console.log(`M3U8 Proxy Server running at http://${host}:${port}`);
  if (allowedOrigins.length > 0) {
    console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
  } else {
    console.log('Allowed origins: All (*)');
  }
});
