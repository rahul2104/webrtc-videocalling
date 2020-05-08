require('dotenv').config({ debug: process.env.DEBUG });
const http = require('http');
const express = require('express');
const config = require('../src/config');
const socket = require('./lib/socket');

const app = express();

app.use(function(request, response, next){
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Credentials', true);
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken");
  response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

const server = http.createServer(app);

server.listen(config.SERVER_PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.SERVER_PORT);
});
