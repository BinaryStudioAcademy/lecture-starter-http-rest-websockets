import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

import socketHandler from './socket/socket.js';
import routes from './routes/routes.js';
import { STATIC_PATH, PORT } from './config.js';

const app = express();
const httpServer = new http.Server(app);
const socketIo = new Server(httpServer);

app.use(express.static(STATIC_PATH));

routes(app);

app.get('*', (req, res) => res.redirect('/login'));

socketHandler(socketIo);

httpServer.listen(PORT, () => {
    console.log(`- Listen server on port ${PORT}`);
    console.log(`- App running on http://localhost:${PORT}`);
});

export default { app, httpServer };
