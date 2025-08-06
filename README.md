# M3U8 Cross-Origin Proxy Server

A lightweight proxy server for bypassing CORS restrictions when streaming M3U8 content.

## Features

- Proxy M3U8 playlist files with rewritten URLs
- Proxy TS segment files
- Automatic URL resolution and rewriting
- CORS headers support
- Custom headers support
- Domain-specific header templates for anti-hotlinking bypass
- TS segment caching with cache control headers
- Dynamic header assignment based on request domains
- Error handling

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file with the following variables:

```
HOST=localhost
PORT=3000
PUBLIC_URL=http://localhost:3000
ALLOWED_ORIGINS=https://example.com,https://another-domain.com
```

## Usage

Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

### M3U8 Proxy

```
GET /proxy?url={m3u8_url}&headers={optional_headers}
```

Parameters:
- `url` (required): The URL of the M3U8 playlist
- `headers` (optional): JSON-encoded headers to send with the request

### TS Segment Proxy

```
GET /ts-proxy?url={segment_url}&headers={optional_headers}
```

Parameters:
- `url` (required): The URL of the TS segment
- `headers` (optional): JSON-encoded headers to send with the request

## Example Usage

To proxy an M3U8 playlist:
```
http://localhost:3000/proxy?url=https://example.com/playlist.m3u8
```

To proxy an M3U8 playlist with custom headers:
```
http://localhost:3000/proxy?url=https://example.com/playlist.m3u8&headers={"Authorization":"Bearer token"}
```

## Domain-Specific Headers

The proxy automatically applies domain-specific headers to bypass anti-hotlinking protections. These headers are defined in `domainTemplates.js` and include:

- User-Agent strings specific to each domain
- Accept headers that match typical browser requests
- Origin and Referer headers that match the domain
- Other domain-specific headers required for access

The system automatically detects the domain from the URL and applies the appropriate headers. Custom headers provided via the `headers` parameter will be merged with the domain-specific headers.

## Caching

TS segments are cached in memory for 5 minutes to improve performance and reduce redundant network requests. Cached responses include appropriate cache control headers for client-side caching.

Cache headers:
- `X-Cache: HIT` - Response was served from cache
- `X-Cache: MISS` - Response was fetched from the origin server

## How It Works

1. The M3U8 proxy fetches the playlist and rewrites all URLs to point back to this proxy server
2. When a player requests a segment, it goes through the TS proxy
3. All requests include proper CORS headers

## License

MIT
