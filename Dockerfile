# Stage 1: Build the frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json bun.lockb ./
RUN npm install

COPY . .
RUN npm run build -- --mode test

# Stage 2: Serve static files with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ../nginx/nginx-spa.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
