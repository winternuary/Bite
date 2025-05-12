"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "@/components/header";
import Link from "next/link";

interface ChatRoomItem {
  roomId: number;
  post: {
    id: number;
    title: string;
    imageUrl: string;
  };
}

const ChatList = () => {
  const { data: session } = useSession();
  const [chatRooms, setChatRooms] = useState<ChatRoomItem[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      if (!session?.user?.email) return;

      const res = await fetch(`/api/chat/list?email=${session.user.email}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setChatRooms(data);
      } else {
        console.error("예상치 못한 응답:", data);
      }
    };

    fetchChats();
  }, [session]);

  return (
    <>
      <Header />
      <S.Layout>
        <S.Title>채팅 목록</S.Title>
        {chatRooms.map(({ roomId, post }) => (
          <Link key={roomId} href={`/chatting/list/${roomId}`}>
            <S.RoomBox>
              <S.Thumbnail src={post.imageUrl} alt="썸네일" />
              <S.PostTitle>{post.title}</S.PostTitle>
            </S.RoomBox>
          </Link>
        ))}
      </S.Layout>
    </>
  );
};

export default ChatList;
