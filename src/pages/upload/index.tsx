"use client";

import * as S from "./style";
import Link from "next/link";
import Header from "@/components/header";

const Upload = () => {
  return (
    <>
      <Header />
      <S.DetailLayout>
        <Link href="/">
          <S.Back src="/back.svg" />
        </Link>
        <S.DetailBox>
          <S.ImgBox>
            <S.ImgChoiceText>파일을 드래그 & 드랍 하세요</S.ImgChoiceText>
            <S.Or>또는</S.Or>
            <S.ImgButton>파일 업로드</S.ImgButton>
          </S.ImgBox>
          <S.RightBox>
            <S.TitleBox>
              <S.Title>물건 업로드</S.Title>
              <S.Name>김영은님</S.Name>
            </S.TitleBox>
            <S.InputBox>
              <S.GoodsInput>
                <S.GoodsName>제품 이름</S.GoodsName>
                <S.Input placeholder="제품 이름을 입력하세요" maxLength={50} />
                <S.CountText>30/50자</S.CountText>
              </S.GoodsInput>
              <S.GoodsInput>
                <S.GoodsName>제품 설명</S.GoodsName>
                <S.TextArea
                  placeholder="제품 설명을 입력하세요"
                  maxLength={200}
                />
                <S.CountText>160/200자</S.CountText>
              </S.GoodsInput>
              <S.GoodsInput>
                <S.GoodsName>제품 가격</S.GoodsName>
                <S.Input placeholder="₩ 가격을 입력하세요" />
              </S.GoodsInput>
            </S.InputBox>

            <S.Button>업로드 하기</S.Button>
          </S.RightBox>
        </S.DetailBox>
      </S.DetailLayout>
    </>
  );
};

export default Upload;
