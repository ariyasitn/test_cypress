FROM cypress/browsers:node14.7.0-chrome84


WORKDIR /opt/cypress/temp

COPY . .

RUN npm install
RUN npm i cypress
RUN $(npm bin)/cypress verify