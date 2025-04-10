import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
      });

      if (!post) return res.status(404).json({ message: "게시물 없음" });

      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 에러" });
    }
  } else {
    return res.status(405).json({ message: "허용되지 않은 메서드" });
  }
}
