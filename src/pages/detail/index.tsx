"use client";

import * as S from "./style";
import Header from "@/components/header";

const Detail = () => {
  return (
    <>
      <Header />
      <S.DetailLayout>
        <S.DetailBox>
          <S.Goods src="/detailgoods.svg" />

          <S.RightBox>
            <S.TitleBox>
              <S.Name>김영은</S.Name>
              <S.Title>나무 대신 휴지 12개입</S.Title>
              <S.Money>4,000원</S.Money>
            </S.TitleBox>
            <S.PeopleBox>
              <S.PeopleImg src="/people.svg" />
              <S.PeopleText>2/4</S.PeopleText>
            </S.PeopleBox>
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
