FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally (optional)
RUN npm install -g nodemon

# Copy the rest of the files
COPY . .

EXPOSE 3000

# Start in development mode
CMD ["npm", "run", "dev"]
