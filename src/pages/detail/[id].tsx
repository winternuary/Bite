"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import ConfirmModal from "@/components/modal/modal";

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
  const [showModal, setShowModal] = useState(false);
  const [showDeletedCompleteModal, setShowDeletedCompleteModal] =
    useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);
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

  useEffect(() => {
    if (post && session?.user?.email) {
      fetch(
        `/api/participant/check?postId=${post.id}&email=${session.user.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setIsJoined(data.isJoined);
        });
    }
  }, [post, session]);

  const handleDelete = () => {
    setShowModal(true);
  };
  const handleEdit = () => {
    router.push(`/edit/${id}`);
  };

  const isOwner =
    session?.user?.email && post?.user?.email === session.user?.email;

  if (!post) return <div>로딩 중...</div>;

  const handleJoin = async () => {
    if (!session?.user?.email) {
      alert("로그인이 필요합니다.");
      return;
    }

    const res = await fetch(`/api/participant/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: session.user.email }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("공동구매 참여 완료!");
      router.push("/chatting/list");
    } else {
      alert(data.message || "참여 실패");
    }
  };

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
            <S.Button onClick={handleJoin} disabled={isJoined}>
              {isJoined ? "공동구매 참여 완료" : "공동구매하기"}
            </S.Button>
          </S.RightBox>
        </S.DetailBox>
      </S.DetailLayout>
      {showModal && (
        <ConfirmModal
          title="정말 삭제하시겠습니까?"
          message="삭제된 게시물은 되돌릴 수 없습니다."
          confirmText="삭제"
          cancelText="취소"
          onCancel={() => setShowModal(false)}
          onConfirm={async () => {
            const res = await fetch(`/api/post/${id}`, {
              method: "DELETE",
            });

            if (res.ok) {
              setShowModal(false);
              setShowDeletedCompleteModal(true);
            } else {
              alert("삭제 실패");
            }
          }}
        />
      )}

      {showDeletedCompleteModal && (
        <ConfirmModal
          title="삭제 완료"
          message="게시물이 성공적으로 삭제되었습니다."
          confirmText="홈으로 이동"
          onCancel={() => setShowDeletedCompleteModal(false)}
          onConfirm={() => {
            setShowDeletedCompleteModal(false);
            router.push("/");
          }}
        />
      )}
    </>
  );
};

export default Detail;
