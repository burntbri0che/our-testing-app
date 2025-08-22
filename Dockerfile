# Stage 1: Build the frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json bun.lockb ./
RUN npm install

COPY . .
RUN npm run build -- --mode dev

# Stage 2: Serve static files with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Optional: SPA-friendly config
COPY ../nginx/nginx-spa.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
