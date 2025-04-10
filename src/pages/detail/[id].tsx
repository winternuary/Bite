"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import Header from "@/components/header";

type Post = {
  id: number;
  title: string;
  description: string;
  price: number;
  link?: string;
  people: number;
  imageUrl: string;
  category: string;
  createdAt: string;
};

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const res = await fetch(`/api/post/${id}`);
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <>
      <Header />
      <S.DetailLayout>
        <S.DetailBox>
          <S.Goods src={post.imageUrl} />
          <S.RightBox>
            <S.TitleBox>
              <S.Name>김영은</S.Name>
              <S.Title>{post.title}</S.Title>
              <S.Money>{post.price.toLocaleString()}원</S.Money>
            </S.TitleBox>
            <S.PeopleBox>
              <S.PeopleImg src="/people.svg" />
              <S.PeopleText>{post.people}명 참여</S.PeopleText>
            </S.PeopleBox>
            <S.Explain>{post.description}</S.Explain>
            {post.link && (
              <>
                <S.LinkTitle>제품링크</S.LinkTitle>
                <S.Link href={post.link} target="_blank">
                  {post.link}
                </S.Link>
              </>
            )}
            <S.Button>공동구매하기</S.Button>
          </S.RightBox>
        </S.DetailBox>
      </S.DetailLayout>
    </>
  );
};

export default Detail;
