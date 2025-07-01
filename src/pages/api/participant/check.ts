// GET /api/participant/check?postId=3&email=abc@naver.com
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { postId, email } = req.query;

  if (!postId || !email || typeof email !== "string") {
    return res.status(400).json({ message: "잘못된 요청" });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "사용자 없음" });

  const participant = await prisma.participant.findFirst({
    where: {
      postId: Number(postId),
      userId: user.id,
    },
  });

  res.status(200).json({ isJoined: !!participant });
}
