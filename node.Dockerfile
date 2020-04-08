FROM node:12

WORKDIR /neetcode/

COPY ./ ./

RUN npm install

CMD npm run dev