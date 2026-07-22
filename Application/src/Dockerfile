FROM registry.access.redhat.com/ubi8/nodejs-16

WORKDIR /tmp

USER root

COPY src/package*.json ./

RUN npm install

COPY src .

ENV PORT 8080

USER 1001

EXPOSE 8080
CMD ["node", "app.js"]