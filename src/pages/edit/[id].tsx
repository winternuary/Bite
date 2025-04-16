"use client";

import { useEffect, useState } from "react";
import ConfirmModal from "@/components/modal/modal";
import { useRouter } from "next/router";
import * as S from "./style";
import Header from "@/components/header";

const Edit = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { id } = router.query;

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    link: "",
    people: "",
    category: "생필품",
  });

  const [previewUrl, setPreviewUrl] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const res = await fetch(`/api/post/${id}`);
      const data = await res.json();
      setForm({
        title: data.title,
        description: data.description,
        price: data.price.toString(),
        link: data.link || "",
        people: data.people.toString(),
        category: data.category,
      });
      setPreviewUrl(data.imageUrl);
    };

    fetchPost();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (cat: string) => {
    setForm((prev) => ({ ...prev, category: cat }));
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/post/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        people: Number(form.people),
        imageUrl: previewUrl,
      }),
    });

    if (res.ok) {
      setShowModal(true);
    } else {
      alert("수정 실패!");
    }
  };

  return (
    <>
      <Header />
      <S.UploadLayout>
        <S.Title>게시물 수정</S.Title>
        <S.UploadForm>
          <S.FormBox>
            <S.Label>제품 이름</S.Label>
            <S.Input name="title" value={form.title} onChange={handleChange} />
          </S.FormBox>

          <S.FormBox>
            <S.Label>제품 설명</S.Label>
            <S.TextArea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <S.CountText>{form.description.length}/200자</S.CountText>
          </S.FormBox>

          <S.FormBox>
            <S.Label>카테고리 선택</S.Label>
            <S.CategoryBox>
              {["생필품", "간식", "기타"].map((cat) => (
                <S.Button
                  key={cat}
                  isSelected={form.category === cat}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </S.Button>
              ))}
            </S.CategoryBox>
          </S.FormBox>

          <S.FormBox>
            <S.Label>가격</S.Label>
            <S.Input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
          </S.FormBox>

          <S.FormBox>
            <S.Label>제품 링크</S.Label>
            <S.Input name="link" value={form.link} onChange={handleChange} />
          </S.FormBox>

          <S.FormBox>
            <S.Label>구매 인원</S.Label>
            <S.Input
              name="people"
              type="number"
              value={form.people}
              onChange={handleChange}
            />
          </S.FormBox>

          <S.FormBox>
            <S.Label>기존 이미지</S.Label>
            <S.ImagePreview src={previewUrl} alt="미리보기" />
          </S.FormBox>
        </S.UploadForm>
        <S.UploadButton onClick={handleSubmit}>수정하기</S.UploadButton>
      </S.UploadLayout>
      {showModal && (
        <ConfirmModal
          title="수정완료"
          message="상품이 성공적으로 수정되었습니다."
          confirmText="상세보기로 이동"
          cancelText="닫기"
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            setShowModal(false);
            router.push(`/detail/${id}`);
          }}
        />
      )}
    </>
  );
};

export default Edit;
