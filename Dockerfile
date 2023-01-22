FROM node:16.13.0-bullseye-slim

COPY frontend/ api/

WORKDIR api

RUN npm install

RUN npm run start
