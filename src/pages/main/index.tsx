"use client";

import * as S from "./style";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  description: string;
  price: number;
  link?: string;
  people: number;
  imageUrl: string;
  category: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
};

const Main = () => {
  const [selectedButton, setSelectedButton] = useState<string>("전체");
  const [posts, setPosts] = useState<Post[]>([]);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post");
      const data = await res.json();
      console.log("받아온 post 데이터: ", data);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    selectedButton === "전체"
      ? posts
      : posts.filter((p) => p.category === selectedButton);

  return (
    <>
      <Header />
      <S.MainLayout>
        <S.CategoryBox>
          <S.Left>
            {" "}
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
          </S.Left>

          <Link href="/upload">
            <S.UploadButton>물건 올리기</S.UploadButton>
          </Link>
        </S.CategoryBox>

        <S.MainBox>
          {filteredPosts.map((post) => (
            <S.Link key={post.id} href={`/detail/${post.id}`}>
              <S.goods>
                <S.goodsImage src={post.imageUrl} />
                <S.Title>{post.title}</S.Title>
                <S.Money>{post.price.toLocaleString()}원</S.Money>
                <S.SubTitleBox>
                  <S.ProfileBox>
                    <S.Profile src={post.user.image} />
                    <S.ProfileName>{post.user.name}님</S.ProfileName>
                  </S.ProfileBox>
                </S.SubTitleBox>
              </S.goods>
            </S.Link>
          ))}
        </S.MainBox>
      </S.MainLayout>
    </>
  );
};

export default Main;
