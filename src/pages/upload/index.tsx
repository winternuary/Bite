"use client";

import * as S from "./style";
import Header from "@/components/header";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";

const Upload = () => {
  const { data: session } = useSession();
  const [category, setCategory] = useState("생필품");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [people, setPeople] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async () => {
    if (!session?.user?.email) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!title || !description || !price || !people || !previewUrl) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        link,
        people: Number(people),
        imageUrl: previewUrl,
        category,
        userEmail: session.user.email,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("업로드가 완료되었습니다!");
    } else {
      alert(`업로드 실패: ${data.message}`);
    }
  };

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
            <S.Input
              placeholder="제품 이름을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 설명</S.Label>
            <S.TextArea
              placeholder="제품 설명을 입력해주세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <S.CountText>{description.length}/200자</S.CountText>
          </S.FormBox>
          <S.FormBox>
            <S.Label>카테고리 선택</S.Label>
            <S.CategoryBox>
              {["생필품", "간식", "기타"].map((cat) => (
                <S.Button
                  key={cat}
                  isSelected={category === cat}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </S.Button>
              ))}
            </S.CategoryBox>
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 가격</S.Label>
            <S.Input
              type="number"
              placeholder="가격을 입력해주세요."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </S.FormBox>
          <S.FormBox>
            <S.Label>제품 링크</S.Label>
            <S.Input
              placeholder="제품 링크를 입력해주세요."
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </S.FormBox>
          <S.FormBox>
            <S.Label>구매 인원</S.Label>
            <S.Input
              type="number"
              placeholder="구매 인원을 입력해주세요."
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
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
                  <S.ImagePreview src={previewUrl} alt="미리보기 이미지" />
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
        <S.UploadButton onClick={handleUpload}>업로드</S.UploadButton>
      </S.UploadLayout>
    </>
  );
};

export default Upload;
