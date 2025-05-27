import { Server } from "socket.io";
import type { NextApiRequest } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: any) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server as any, {
      path: "/api/socketio",
    });

    io.on("connection", (socket) => {
      socket.on("join", (roomId) => {
        socket.join(`room-${roomId}`);
      });

      socket.on("message", ({ roomId, message }) => {
        socket.to(`room-${roomId}`).emit("message", message);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
