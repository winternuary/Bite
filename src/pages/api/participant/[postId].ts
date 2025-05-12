import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "허용되지 않은 메서드" });

  const { postId } = req.query;
  const { userEmail } = req.body;

  if (!userEmail || typeof userEmail !== "string") {
    return res.status(400).json({ message: "userEmail이 필요합니다." });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user)
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });

    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
      include: { chatRoom: true },
    });
    if (!post)
      return res.status(404).json({ message: "게시물을 찾을 수 없습니다." });

    if (post.current >= post.people) {
      return res.status(400).json({ message: "정원이 가득 찼습니다." });
    }

    await prisma.participant.upsert({
      where: {
        userId_postId: {
          userId: user.id,
          postId: post.id,
        },
      },
      update: {},
      create: {
        userId: user.id,
        postId: post.id,
      },
    });

    await prisma.chatParticipant.upsert({
      where: {
        userId_chatRoomId: {
          userId: user.id,
          chatRoomId: post.chatRoom!.id,
        },
      },
      update: {},
      create: {
        userId: user.id,
        chatRoomId: post.chatRoom!.id,
      },
    });

    await prisma.post.update({
      where: { id: post.id },
      data: {
        current: { increment: 1 },
      },
    });

    return res.status(200).json({ message: "공동구매 참여 완료" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "서버 에러" });
  }
}
