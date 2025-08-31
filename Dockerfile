# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN apk update && apk add --no-cache curl

# Install only production dependencies
RUN npm install --omit=dev

# Copy all project files
COPY . .

# Expose the port if your server uses 3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl", "-f","--max-time", "10", "http://localhost:3000/ts-proxy?url=https%3A%2F%2Fdemo.unified-streaming.com%2Fk8s%2Ffeatures%2Fstable%2Fvideo%2Ftears-of-steel%2Ftears-of-steel.ism%2Ftears-of-steel-audio_eng%3D128002-video_eng%3D2200000-10.ts&headers={}" ]

# Run the server
CMD ["npm", "start"]
