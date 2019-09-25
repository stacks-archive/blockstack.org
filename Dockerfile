FROM node:10.15.3-alpine as base
# FROM blockstack/node:latest as base
WORKDIR /usr/src
COPY ./package.json ./yarn.lock /usr/src/
RUN apk update
RUN apk add --repository https://dl-3.alpinelinux.org/alpine/edge/community/ --update-cache \
  python \
  py-pip \
  make \
  g++ \
  vips-dev
RUN yarn
COPY . .
RUN yarn build && yarn export && \
  apk del \
    python \
    py-pip \
    make \
    g++

FROM nginx
RUN apt-get update && apt-get install ssl-cert -y
COPY --from=0 /src/blockstack.org/out /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf
