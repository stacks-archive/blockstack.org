FROM node:8
WORKDIR /src/blockstack.org
COPY . .
RUN npm install
# This is necessary because of react/babel-polyfill weirdness.
RUN npm install core-js
RUN npm run build
RUN npm run export

FROM nginx
COPY --from=0 /src/blockstack.org/out /usr/share/nginx/html
