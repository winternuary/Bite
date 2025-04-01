"use client";

import * as S from "./style";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";

const Main = () => {
  const [selectedButton, setSelectedButton] = useState<string>("전체");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <Header />
      <S.MainLayout>
        <S.CategoryBox>
          <S.Button
            isSelected={selectedButton === "전체"}
            onClick={() => handleButtonClick("전체")}
          >
            전체
          </S.Button>
          <S.Button
            isSelected={selectedButton === "생필품"}
            onClick={() => handleButtonClick("생필품")}
          >
            생필품
          </S.Button>
          <S.Button
            isSelected={selectedButton === "간식"}
            onClick={() => handleButtonClick("간식")}
          >
            간식
          </S.Button>
          <S.Button
            isSelected={selectedButton === "기타"}
            onClick={() => handleButtonClick("기타")}
          >
            기타
          </S.Button>
        </S.CategoryBox>
        <S.MainBox>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
          <Link href="/detail">
            <S.goods>
              <S.goodsImage src="/goods.svg" />
              <S.Title>휴지</S.Title>
              <S.SubTitleBox>
                <S.Money>4000원</S.Money>
                <S.PeopleBox>
                  <S.PeopleImg src="/people.svg" />
                  <S.PeopleText>2/4</S.PeopleText>
                </S.PeopleBox>
              </S.SubTitleBox>
            </S.goods>
          </Link>
        </S.MainBox>
      </S.MainLayout>
    </>
  );
};

export default Main;
