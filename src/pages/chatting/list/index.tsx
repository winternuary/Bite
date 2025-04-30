"use client";

import * as S from "./style";
import Header from "@/components/header";
import Link from "next/link";

const List = () => {
  return (
    <>
      <Header />
      <S.ListLayout>
        <Link href={`/chatting/chat/`}>
          <S.ChattingList></S.ChattingList>
        </Link>
      </S.ListLayout>
    </>
  );
};

export default List;
