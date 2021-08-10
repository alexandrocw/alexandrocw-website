require('dotenv').config(); // Load environtment variables from .env file

const Server = require('./models/server');
const server = new Server();
server.listen();