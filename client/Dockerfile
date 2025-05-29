# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install all dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the port Next.js uses
EXPOSE 3000

# Start in development mode
CMD ["npm", "run", "dev"]