# Stage 1: Build aplikasi Vue.js
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Gunakan image Nginx untuk server web
FROM nginx:alpine

# Salin file konfigurasi nginx.conf ke dalam container
COPY default.conf /etc/nginx/conf.d/default.conf

# Salin hasil build aplikasi Vue.js dari tahap sebelumnya
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 82

CMD ["nginx", "-g", "daemon off;"]
