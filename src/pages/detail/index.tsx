"use client";

import * as S from "./style";
import Link from "next/link";
import Header from "@/components/header";

const Detail = () => {
  return (
    <>
      <Header />
      <S.DetailLayout>
        <Link href="/">
          <S.Back src="/back.svg" />
        </Link>
        <S.DetailBox>
          <S.Goods src="/goods.svg" />
          <S.RightBox>
            <S.TitleBox>
              <S.Title>휴지</S.Title>
              <S.Name>김영은님</S.Name>
            </S.TitleBox>
            <S.SubTitleBox>
              <S.PeopleBox>
                <S.PeopleImg src="/people.svg" />
                <S.PeopleText>2/4</S.PeopleText>
              </S.PeopleBox>
            </S.SubTitleBox>
            <S.Money>4000원</S.Money>
            <S.Explain>
              기숙사 휴지 공구하실 분 구합니다ㅏ <br /> 1인당 4개씩 가질 수
              있음!
            </S.Explain>
            <S.LinkTitle>제품링크</S.LinkTitle>
            <S.Link>https://@gbwltktlftody</S.Link>
            <S.Button>공동구매하기</S.Button>
          </S.RightBox>
        </S.DetailBox>
      </S.DetailLayout>
    </>
  );
};

export default Detail;
