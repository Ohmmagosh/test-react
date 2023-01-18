FROM node:16-alpine as builder

WORKDIR ./app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.15

WORKDIR ./app

COPY --from=builder ./app/build /usr/share/nginx/html


