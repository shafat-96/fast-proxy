# Use official Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install with dev deps for build
COPY package*.json ./
RUN apk update && apk add --no-cache curl
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Prune dev deps for smaller runtime
RUN npm prune --omit=dev

EXPOSE 3000
ENV HOST=0.0.0.0
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD [ "curl", "-f","--max-time", "10", "http://localhost:3000/ts-proxy?url=https%3A%2F%2Fdemo.unified-streaming.com%2Fk8s%2Ffeatures%2Fstable%2Fvideo%2Ftears-of-steel%2Ftears-of-steel.ism%2Ftears-of-steel-audio_eng%3D128002-video_eng%3D2200000-10.ts&headers={}" ]

CMD ["npm", "start"]