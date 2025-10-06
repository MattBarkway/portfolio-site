# Build stage
FROM node:18-bullseye AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install deps
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production image
FROM node:18-bullseye

WORKDIR /app

# Copy built app + node_modules
COPY --from=builder /app /app

# Expose Fly.io port
ENV PORT=8080
ENV NODE_ENV=production

# Ensure Node uses the correct port
EXPOSE 8080

# Start the app
CMD ["npm", "run", "start"]
