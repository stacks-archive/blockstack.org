FROM node:11
WORKDIR /src/blockstack.org
RUN npm i -g yarn
COPY yarn.lock package.json /src/blockstack.org/
RUN yarn install

COPY . .
ARG CACHEBUST=1
RUN yarn prod

FROM nginx
RUN apt-get update && apt-get install ssl-cert -y
COPY --from=0 /src/blockstack.org/out /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf
