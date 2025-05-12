"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "@/components/header";
import Link from "next/link";

interface ChatRoomItem {
  roomId: number;
  participantCount: number;
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
        {chatRooms.map(({ roomId, post, participantCount }) => (
          <Link
            key={roomId}
            href={`/chatting/list/${roomId}`}
            passHref
            legacyBehavior
          >
            <S.LinkBox>
              <S.RoomBox>
                <S.Thumbnail src={post.imageUrl} alt="썸네일" />
                <S.TextBox>
                  <S.PostTitle>{post.title} 공동구매 채팅방</S.PostTitle>
                  <S.ParticipantInfo>
                    참여 인원: {participantCount}명
                  </S.ParticipantInfo>
                </S.TextBox>
              </S.RoomBox>
            </S.LinkBox>
          </Link>
        ))}
      </S.Layout>
    </>
  );
};

export default ChatList;
