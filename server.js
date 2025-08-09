import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { m3u8ProxyHandler, tsProxyHandler } from './proxyHandlers.js';
import { fetchHandler } from './fetchHandler.js';

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
      fetch: '/fetch?url={any_url}&ref={optional_referer}'
    },
    allowedOrigins: allowedOrigins.length > 0 ? allowedOrigins : 'All (*)'
  });
});

app.get('/proxy', m3u8ProxyHandler);
app.get('/ts-proxy', tsProxyHandler);
app.get('/fetch', fetchHandler);

// Start server
app.listen(port, host, () => {
  console.log(`M3U8 Proxy Server running at http://${host}:${port}`);
  if (allowedOrigins.length > 0) {
    console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
  } else {
    console.log('Allowed origins: All (*)');
  }
});
