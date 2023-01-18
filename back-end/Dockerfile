FROM node:19-alpine3.15

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start", "--", "--port", "3001"]

EXPOSE 3001
