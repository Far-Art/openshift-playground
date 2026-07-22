FROM registry.access.redhat.com/ubi8/nodejs-16

WORKDIR /opt/app-root/src

COPY package*.json ./

RUN npm ci

COPY src/ ./

ENV PORT=8080

EXPOSE 8080

CMD ["node", "app.js"]
