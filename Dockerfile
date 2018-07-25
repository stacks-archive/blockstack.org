FROM node:8
WORKDIR /src/blockstack.org
COPY . .
RUN npm i
RUN npm run prod

FROM nginx
COPY --from=0 /src/blockstack.org/build /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf
