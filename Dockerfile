FROM node
WORKDIR /api
COPY . .
EXPOSE 3000
RUN npm install -g nodemon && npm install && npm audit fix 
CMD nodemon start