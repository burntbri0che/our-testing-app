# Stage 1: Build the frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json bun.lockb ./
RUN npm install

COPY . .
# Build with correct base for /dev/
RUN npm run build -- --mode dev

# Stage 2: Serve the static files using a simple static server
FROM node:20-alpine
WORKDIR /app

# Install serve to serve the build folder
RUN npm install -g serve

# Copy build output
COPY --from=builder /app/dist /app/dist

# Expose port 3000 internally
EXPOSE 3000

# Run the static server
CMD ["serve", "-s", "dist", "-l", "3000"]
