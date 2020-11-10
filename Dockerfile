FROM node:12.16.1-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 4200 49153
CMD yarn start
