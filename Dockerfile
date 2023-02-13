FROM node:16.17.1

ARG PROJECT=app
ARG PROJECT_DIR=/${PROJECT}
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR
COPY . .

RUN npm install
