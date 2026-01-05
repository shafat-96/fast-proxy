# Use official Bun image
FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY bun.lockb* ./
RUN apk update && apk add --no-cache curl
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

EXPOSE 3000
ENV HOST=0.0.0.0
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD [ "curl", "-f","--max-time", "10", "http://localhost:3000/ts-proxy?url=https%3A%2F%2Fdemo.unified-streaming.com%2Fk8s%2Ffeatures%2Fstable%2Fvideo%2Ftears-of-steel%2Ftears-of-steel.ism%2Ftears-of-steel-audio_eng%3D128002-video_eng%3D2200000-10.ts&headers={}" ]

CMD ["bun", "run", "server.ts"]