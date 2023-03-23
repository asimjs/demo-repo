FROM node:16.3.0

COPY . /app

WORKDIR /app

RUN yarn

RUN yarn build

EXPOSE 3000

CMD [ "yarn","start" ]