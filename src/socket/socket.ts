import { Server } from 'socket.io';

import * as config from './config.js';

export default (io: Server) => {
    io.on('connection', socket => {
        const username = socket.handshake.query.username;
    });
};
