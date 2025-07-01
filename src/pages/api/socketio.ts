import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socketio",
    });

    io.on("connection", (socket) => {
      socket.on("join", (roomId) => {
        socket.join(`room-${roomId}`);
      });

      socket.on("message", async ({ roomId, message, userId }) => {
        // DB 저장
        await prisma.message.create({
          data: {
            content: message,
            userId,
            chatRoomId: Number(roomId),
          },
        });

        // 다른 유저에게 전송
        socket.to(`room-${roomId}`).emit("message", {
          content: message,
          sender: "other",
        });
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
