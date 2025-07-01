import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  const room = await prisma.chatRoom.findUnique({
    where: { id: Number(id) },
    include: {
      post: {
        select: { title: true },
      },
    },
  });

  if (!room) {
    return res.status(404).json({ error: "채팅방을 찾을 수 없습니다." });
  }

  res.json({ title: room.post.title });
}
