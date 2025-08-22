# Stage 1: Build the dev branch
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first for caching
COPY package*.json bun.lockb ./

# Install dependencies
RUN npm install

# Copy the rest of the dev branch
COPY . .

# Build with base /dev/ for Nginx reverse proxy
RUN npm run build -- --mode dev

# Stage 2: Serve with Node preview (Vite)
FROM node:20-alpine
WORKDIR /app

# Copy build output
COPY --from=builder /app .

# Expose port 3000 internally
EXPOSE 3000

# Run Vite preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
