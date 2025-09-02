import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { m3u8ProxyHandler, tsProxyHandler, mp4ProxyHandler } from './proxyHandlers.js';
import axios from 'axios';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = process.env.HOST || 'localhost';

// Parse allowed origins from environment variable
const allowedOrigins: string[] = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : [];

// Custom CORS middleware for origin checking
const customCors = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin as string | undefined;

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

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'M3U8 Cross-Origin Proxy Server',
    endpoints: {
      m3u8: '/proxy?url={m3u8_url}&headers={optional_headers}',
      ts: '/ts-proxy?url={ts_segment_url}&headers={optional_headers}',
      fetch: '/fetch?url={any_url}&ref={optional_referer}',
      mp4: '/mp4-proxy?url={mp4_url}&headers={optional_headers}',
    },
    allowedOrigins: allowedOrigins.length > 0 ? allowedOrigins : 'All (*)',
  });
});

app.get('/proxy', m3u8ProxyHandler);
app.get('/ts-proxy', tsProxyHandler);
app.get('/mp4-proxy', mp4ProxyHandler);
app.get('/fetch', async (req: Request, res: Response) => {
  try {
    const { url, ref } = req.query as { url?: string; ref?: string };
    if (!url) return res.status(400).json({ error: 'URL parameter is required' });

    const headers: Record<string, string> = {};
    if (typeof ref === 'string' && ref) headers['Referer'] = ref;

    const upstream = await axios({
      method: 'GET',
      url,
      headers,
      responseType: 'stream',
      validateStatus: () => true,
      maxRedirects: 5,
    });

    // Pass through status and essential headers only
    res.status(upstream.status);
    const contentType = upstream.headers['content-type'] as string | undefined;
    if (contentType) res.setHeader('Content-Type', contentType);

    upstream.data.on('error', (err: Error) => {
      if (!res.headersSent) res.status(502).end('Upstream error');
      else res.destroy(err);
    });
    upstream.data.pipe(res);
  } catch (error: any) {
    res.status(500).json({ message: 'Request failed', error: error.message });
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
