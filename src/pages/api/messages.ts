import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const { roomId, userId } = req.query;

  const messages = await prisma.message.findMany({
    where: { chatRoomId: Number(roomId) },
    orderBy: { createdAt: "asc" },
  });

  res.json({
    messages: messages.map((msg) => ({
      content: msg.content,
      sender: msg.userId === userId ? "me" : "other",
    })),
  });
}
