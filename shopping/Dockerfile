FROM node:18.17.1

WORKDIR /app/shopping

COPY package.json .

# Clear npm cache
RUN npm cache clean --force


RUN npm install
# Rebuild bcrypt
RUN npm rebuild bcrypt --build-from-source


COPY . .

EXPOSE 8003

CMD ["npm", "start"]