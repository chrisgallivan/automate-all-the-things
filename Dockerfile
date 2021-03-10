FROM node:12

#create app directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install

#test

#bundle app source
COPY . .

EXPOSE 3000

CMD ["node","index.js"]
