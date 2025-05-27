import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "유효하지 않은 ID입니다." });
  }

  const postId = Number(id);

  if (req.method === "GET") {
    try {
      const post = await prisma.post.findUnique({
        where: { id: postId },
        include: { user: true },
      });

      if (!post) return res.status(404).json({ message: "게시물 없음" });

      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 에러" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const chatRoom = await prisma.chatRoom.findUnique({
        where: { postId },
      });

      if (chatRoom) {
        await prisma.message.deleteMany({
          where: { chatRoomId: chatRoom.id },
        });

        await prisma.chatParticipant.deleteMany({
          where: { chatRoomId: chatRoom.id },
        });

        await prisma.chatRoom.delete({
          where: { id: chatRoom.id },
        });
      }

      await prisma.participant.deleteMany({
        where: { postId },
      });

      await prisma.post.delete({
        where: { id: postId },
      });

      return res.status(200).json({ message: "삭제 성공" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "삭제 실패" });
    }
  }

  if (req.method === "PUT") {
    const { title, description, price, link, people, imageUrl, category } =
      req.body;

    try {
      const updated = await prisma.post.update({
        where: { id: postId },
        data: {
          title,
          description,
          price,
          link,
          people,
          imageUrl,
          category,
        },
      });

      return res.status(200).json({ message: "수정 성공", post: updated });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "수정 실패" });
    }
  }

  return res.status(405).json({ message: "허용되지 않은 메서드" });
}
