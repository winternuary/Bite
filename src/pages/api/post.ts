// pages/api/post.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { title, description, price, link, people, imageUrl } = req.body;

    try {
      const post = await prisma.post.create({
        data: {
          title,
          description,
          price: Number(price),
          link,
          people: Number(people),
          imageUrl,
        },
      });

      return res.status(200).json({ message: "게시물 등록 성공", post });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 에러" });
    }
  } else {
    return res.status(405).json({ message: "허용되지 않은 메서드" });
  }
}
