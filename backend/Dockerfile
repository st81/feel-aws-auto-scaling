FROM node:15

RUN apt-get update
RUN apt-get install apache2-utils -y
RUN mkdir -p app/src
WORKDIR /app
ADD package.json .
RUN npm install --production
ADD ./src ./src
CMD ["node", "/app/src/index.js"]
