FROM node:18-alpine AS builder

ENV COMPOSE_HTTP_TIMEOUT=50000

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
