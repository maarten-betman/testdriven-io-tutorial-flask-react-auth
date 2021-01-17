FROM node:15.2.0-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@4.0.0 -g -silent

CMD ["npm", "start"]