"use client";

import * as S from "./style";
import Header from "@/components/header";
import ConfirmModal from "@/components/modal/modal";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema } from "@/lib/validationSchema";
import { z } from "zod";

type UploadForm = z.infer<typeof uploadSchema>;

const Upload = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [category, setCategory] = useState("생필품");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UploadForm>({
    resolver: zodResolver(uploadSchema),
  });

  const onSubmit = async (formData: UploadForm) => {
    if (!session?.user?.email) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!previewUrl) {
      alert("이미지를 첨부해주세요.");
      return;
    }

    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        people: Number(formData.people),
        imageUrl: previewUrl,
        category,
        userEmail: session.user.email,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setShowModal(true);
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

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <>
      <Header />
      <S.UploadLayout>
        <S.Title>물건 업로드</S.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.UploadForm>
            <S.FormBox>
              <S.Label>제품 이름</S.Label>
              {errors.title && <S.Error>{errors.title.message}</S.Error>}
              <S.Input
                {...register("title")}
                isError={Boolean(errors.title)}
                placeholder="제품 이름을 입력해주세요."
              />
            </S.FormBox>

            <S.FormBox>
              <S.Label>제품 설명</S.Label>
              {errors.description && (
                <S.Error>{errors.description.message}</S.Error>
              )}
              <S.TextArea
                {...register("description")}
                isError={Boolean(errors.description)}
                placeholder="제품 설명을 입력해주세요."
              />
              <S.CountText>
                {watch("description")?.length || 0}/200자
              </S.CountText>
            </S.FormBox>

            <S.FormBox>
              <S.Label>카테고리 선택</S.Label>
              <S.CategoryBox>
                {["생필품", "간식", "기타"].map((cat) => (
                  <S.Button
                    key={cat}
                    isSelected={category === cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </S.Button>
                ))}
              </S.CategoryBox>
            </S.FormBox>

            <S.FormBox>
              <S.Label>제품 가격</S.Label>
              {errors.price && <S.Error>{errors.price.message}</S.Error>}
              <S.Input
                type="number"
                {...register("price")}
                isError={Boolean(errors.price)}
                placeholder="제품의 1인당 가격을 입력해주세요."
              />
            </S.FormBox>

            <S.FormBox>
              <S.Label>제품 링크</S.Label>
              <S.Input
                {...register("link")}
                placeholder="제품 링크를 입력해주세요."
              />
            </S.FormBox>

            <S.FormBox>
              <S.Label>구매 인원</S.Label>
              {errors.people && <S.Error>{errors.people.message}</S.Error>}
              <S.Input
                type="number"
                {...register("people")}
                isError={Boolean(errors.people)}
                placeholder="구매 인원을 입력해주세요."
              />
            </S.FormBox>

            <S.FormBox>
              <S.Label>제품 사진</S.Label>
              <S.FileBox>
                <S.FileDropZone onClick={triggerFileInput}>
                  {previewUrl ? (
                    <S.ImagePreview src={previewUrl} alt="미리보기 이미지" />
                  ) : (
                    <>
                      <S.FileIcon>📄</S.FileIcon>
                      <S.FileText>
                        이미지를 이 곳에 첨부하거나 클릭하세요
                      </S.FileText>
                      <S.FileButton type="button">파일 선택</S.FileButton>
                    </>
                  )}
                </S.FileDropZone>
                {file && (
                  <S.DeleteButton type="button" onClick={() => setFile(null)}>
                    삭제
                  </S.DeleteButton>
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
          <S.UploadButton type="submit">업로드</S.UploadButton>
        </form>
      </S.UploadLayout>

      {showModal && (
        <ConfirmModal
          title="업로드 완료"
          message="상품이 성공적으로 업로드되었습니다."
          confirmText="홈으로 이동"
          cancelText="닫기"
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            setShowModal(false);
            router.push("/");
          }}
        />
      )}
    </>
  );
};

export default Upload;
