FROM node:14.17.6

WORKDIR /var/www/app

COPY ./gulpfile.js ./
COPY ./package.json ./

RUN npm install

CMD npm run gulp