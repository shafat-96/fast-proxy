# Use a lightweight official Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for caching npm install layers
COPY package*.json ./

# Install only production dependencies (omit dev dependencies)
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

# Start your server
CMD ["npm", "start"]
