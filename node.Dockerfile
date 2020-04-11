FROM node:12-alpine3.10

WORKDIR /neetcode/

COPY ./ ./

RUN npm install

CMD npm run dev