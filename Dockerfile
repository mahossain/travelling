#FROM ubuntu:20.04
#RUN apt-get -y update
#RUN apt-get -y install nginx

FROM node:16
ENV SECRET_NAME ${SECRET_NAME}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD npm run serve
