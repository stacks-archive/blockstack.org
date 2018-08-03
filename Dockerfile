FROM node:8
WORKDIR /src/blockstack.org
COPY . .
RUN npm install
RUN npm run prod

FROM nginx
RUN apt-get update && apt-get install ssl-cert -y
COPY --from=0 /src/blockstack.org/out /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf
