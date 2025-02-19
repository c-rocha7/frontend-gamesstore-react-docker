FROM node:22.13.0-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

CMD ["sh", "-c", "yarn install && yarn dev --host"]
