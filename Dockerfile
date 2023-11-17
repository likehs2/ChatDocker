FROM node:18-alpine
WORKDIR /chat
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000
