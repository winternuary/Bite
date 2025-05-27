"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import Header from "@/components/header";
import * as S from "./style";

const socket = io(undefined as any, {
  path: "/api/socketio",
});

const ChatRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;

    socket.emit("join", id);
    socket.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, [id]);

  const handleSend = () => {
    if (!input.trim()) return;
    socket.emit("message", { roomId: id, message: input });
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Header />
      <S.ChatLayout>
        <S.MessageList>
          {messages.map((msg, i) => (
            <S.Message key={i}>{msg}</S.Message>
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
