FROM node:19-alpine3.16
WORKDIR /api
COPY package*.json ./

RUN npm ci && \
    npm i -g @nestjs/cli

COPY . .
