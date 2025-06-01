import { type Server } from "socket.io";

const socketHandler = (io: Server): void => {
    io.on("connection", (socket) => {
        const { username: _username } = socket.handshake.query;
    });
};

export { socketHandler };
