const Server = require('./model_server/server');

require('dotenv').config();

const server = new Server();

server.listen();