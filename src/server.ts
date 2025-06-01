import express from "express";
import http from "node:http";
import { Server } from "socket.io";

import { PORT, STATIC_PATH } from "./config.js";
import { rootRouter } from "./routes/routes.js";
import { socketHandler } from "./socket/socket.js";

const app = express();
const httpServer = new http.Server(app);
const socketIo = new Server(httpServer);

app.use(express.static(STATIC_PATH));

rootRouter(app);

app.get("*any", (_request, response) => {
    response.redirect("/signin");
});

socketHandler(socketIo);

httpServer.listen(PORT, () => {
    console.log(`- Listen server on port ${PORT.toString()}`);
    console.log(`- App running on http://localhost:${PORT.toString()}`);
});

export default { app, httpServer };
