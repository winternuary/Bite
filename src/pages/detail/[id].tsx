"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import Header from "@/components/header";
import { useSession } from "next-auth/react";

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
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

const Detail = () => {
  const { data: session } = useSession();
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

  const handleDelete = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (!confirm) return;

    const res = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("삭제되었습니다.");
      router.push("/");
    } else {
      alert("삭제 실패");
    }
  };

  const handleEdit = () => {
    router.push(`/edit/${id}`);
  };

  const isOwner =
    session?.user?.email && post?.user?.email === session.user?.email;

  if (!post) return <div>로딩 중...</div>;

  return (
    <>
      <Header />
      <S.DetailLayout>
        <S.DetailBox>
          <S.Goods src={post.imageUrl} />

          <S.RightBox>
            <S.TitleBox>
              <S.Name>{post.user.name}</S.Name>
              <S.Title>{post.title}</S.Title>
              <S.PriceRow>
                <S.Money>{post.price.toLocaleString()}원</S.Money>
                {isOwner && (
                  <S.IconGroup>
                    <S.Icon src="/modify.svg" onClick={handleEdit} />
                    <S.Icon src="/delete.svg" onClick={handleDelete} />
                  </S.IconGroup>
                )}
              </S.PriceRow>
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
