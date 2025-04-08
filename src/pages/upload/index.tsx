"use client";

import * as S from "./style";
import Header from "@/components/header";
import { useRef, useState } from "react";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selected);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      setFile(dropped);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(dropped);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

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
              <S.FileDropZone
                onClick={triggerFileInput}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                $dragActive={dragActive}
              >
                {previewUrl ? (
                  <>
                    <S.ImagePreview src={previewUrl} alt="미리보기 이미지" />
                  </>
                ) : (
                  <>
                    <S.FileIcon>📄</S.FileIcon>
                    <S.FileText>
                      이미지를 이 곳에 첨부하거나 클릭하세요
                    </S.FileText>
                    <S.FileButton>파일 선택</S.FileButton>
                  </>
                )}
              </S.FileDropZone>
              {file && (
                <S.DeleteButton onClick={handleRemoveFile}>삭제</S.DeleteButton>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </S.FileBox>
          </S.FormBox>
        </S.UploadForm>
        <S.UploadButton>업로드</S.UploadButton>
      </S.UploadLayout>
    </>
  );
};

export default Upload;
