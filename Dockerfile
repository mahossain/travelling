#FROM ubuntu:20.04
#RUN apt-get -y update
#RUN apt-get -y install nginx

FROM node:16
ARG name
ENV SECRET_NAME $name
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD npm run serve
