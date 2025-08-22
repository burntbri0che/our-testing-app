FROM node:20-alpine

WORKDIR /app

COPY package*.json bun.lockb ./
RUN npm install

COPY . .

RUN npm run build

# No EXPOSE here — you control ports only at runtime
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
