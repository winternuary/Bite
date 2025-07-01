import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "허용되지 않은 메서드" });

  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "email이 필요합니다." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        chatParticipants: {
          include: {
            chatRoom: {
              include: {
                post: true,
                participants: true, // ✅ 추가: 참여 인원 수 확인용
              },
            },
          },
        },
      },
    });

    if (!user)
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });

    const chatRooms = user.chatParticipants.map((p) => ({
      roomId: p.chatRoomId,
      participantCount: p.chatRoom.participants.length, // ✅ 추가
      post: {
        id: p.chatRoom.post.id,
        title: p.chatRoom.post.title,
        imageUrl: p.chatRoom.post.imageUrl,
      },
    }));

    return res.status(200).json(chatRooms);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "서버 에러" });
  }
}
