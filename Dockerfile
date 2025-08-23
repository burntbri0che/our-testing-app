# Stage 1: Build the frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json bun.lockb ./
RUN npm install

COPY . .
# Build with correct base for /test/
RUN npm run build

# Stage 2: Serve the static files using a simple static server
FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve
COPY --from=builder /app/dist /app/dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
