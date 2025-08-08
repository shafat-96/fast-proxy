# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all project files
COPY . .

# Expose the port if your server uses 3000
EXPOSE 3000

# Run the server
CMD ["npm", "start"]
