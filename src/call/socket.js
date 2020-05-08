import io from 'socket.io-client';

const config = require('../config');

const socket = io(config.SERVER_URL);

export default socket;
