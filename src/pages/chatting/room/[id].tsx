"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";
import Header from "@/components/header";
import * as S from "./style";

const socket = io(undefined as any, {
  path: "/api/socketio",
});

const ChatRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [messages, setMessages] = useState<
    { content: string; sender: "me" | "other" }[]
  >([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [roomTitle, setRoomTitle] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 🟡 방 제목 불러오기
  useEffect(() => {
    if (!id) return;
    fetch(`/api/chatroom/${id}`)
      .then((res) => res.json())
      .then((data) => setRoomTitle(`${data.title} 공동구매 채팅방`))
      .catch(() => setRoomTitle("채팅방"));
  }, [id]);

  // 🟡 현재 유저 ID 가져오기
  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/user/by-email?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => setUserId(data.id));
    }
  }, [session]);

  // 🟡 과거 메시지 불러오기
  useEffect(() => {
    if (!id || !userId) return;

    fetch(`/api/messages?roomId=${id}&userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.messages)) {
          setMessages(data.messages);
        }
      });
  }, [id, userId]);

  // 🟡 소켓 연결 및 메시지 수신
  useEffect(() => {
    if (!id) return;

    socket.emit("join", id);
    socket.on("message", (msg: { content: string; sender: "me" | "other" }) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, [id]);

  // 🟡 메시지 전송
  const handleSend = () => {
    if (!input.trim() || !userId) return;

    socket.emit("message", {
      roomId: id,
      message: input,
      userId,
    });

    setMessages((prev) => [...prev, { content: input, sender: "me" }]);
    setInput("");
  };

  // 🟡 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Header />
      <S.ChatLayout>
        <S.RoomTitle>{roomTitle}</S.RoomTitle>
        <S.MessageList>
          {messages.map((msg, i) => (
            <S.Message key={i} $sender={msg.sender}>
              {msg.content}
            </S.Message>
          ))}
          <div ref={messagesEndRef} />
        </S.MessageList>
        <S.InputBox>
          <S.Input
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <S.SendButton onClick={handleSend}>전송</S.SendButton>
        </S.InputBox>
      </S.ChatLayout>
    </>
  );
};

export default ChatRoom;
