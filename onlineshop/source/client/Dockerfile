FROM node:20.19.1-alpine as build
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
COPY ./ ./
# ENV NODE_ENV="production"
RUN yarn run build
# ------
FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]