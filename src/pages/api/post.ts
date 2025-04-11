import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const {
      title,
      description,
      price,
      link,
      people,
      imageUrl,
      category,
      userEmail,
    } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (!user) {
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
      }

      const post = await prisma.post.create({
        data: {
          title,
          description,
          price,
          link,
          people,
          imageUrl,
          category,
          userId: user.id,
        },
      });

      return res.status(200).json({ message: "게시물 등록 성공", post });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 에러" });
    }
  } else if (req.method === "GET") {
    try {
      const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "데이터 불러오기 실패" });
    }
  } else {
    return res.status(405).json({ message: "허용되지 않은 메서드" });
  }
}
