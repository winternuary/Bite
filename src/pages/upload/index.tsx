"use client";

import * as S from "./style";
import Header from "@/components/header";

const Upload = () => {
  return (
    <>
      <Header />
      <S.UploadLayout>
        <S.Title>물건 업로드</S.Title>
        <S.UploadForm>
          <S.FormBox>
            <S.Label>제품 이름</S.Label>
            <S.Input placeholder="제품 이름을 입력해주세요." />
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 설명</S.Label>
            <S.TextArea placeholder="제품 설명을 입력해주세요." />
            <S.CountText>160/200자</S.CountText>
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 가격</S.Label>
            <S.Input placeholder="가격을 입력해주세요." />
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 링크</S.Label>
            <S.Input placeholder="제품 링크를 입력해주세요." />
          </S.FormBox>
          <S.FormBox>
            <S.Label>구매 인원</S.Label>
            <S.Input placeholder="구매 인원을 입력해주세요." />
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 사진</S.Label>
            <S.FileBox>
              <S.FileDropZone>
                <S.FileIcon>📄</S.FileIcon>
                <S.FileText>파일을 이 곳에 첨부해주세요</S.FileText>
                <S.FileButton>파일 선택</S.FileButton>
              </S.FileDropZone>
              <S.DeleteButton>삭제</S.DeleteButton>
            </S.FileBox>
          </S.FormBox>
        </S.UploadForm>
        <S.UploadButton>업로드</S.UploadButton>
      </S.UploadLayout>
    </>
  );
};

export default Upload;
