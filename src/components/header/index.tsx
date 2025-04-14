"use client";

import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const WholeLayout = styled.div`
  border-bottom: 1px solid #f5f5f5;
`;

export const HeaderLayout = styled.div`
  margin: 22.5px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img``;
export const ButtonBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

export const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #ffffff;
  background-color: #0073ff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005fdb;
  }
`;

export const Text = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: #808080;
  font-weight: 500;
  margin: 0;
`;

export const LogoutText = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #808080;
  cursor: pointer;
  margin: 0;
`;

export const UploadButton = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  padding: 8px 16px;
  background-color: #0073ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #005fdb;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const Header = () => {
  const { data: session } = useSession();

  return (
    <WholeLayout>
      <HeaderLayout>
        <Link href="/">
          <Logo src="/BiteLogo.svg" />
        </Link>
        <ButtonBox>
          {session ? (
            <>
              <UserInfo>
                {session.user?.image && (
                  <ProfileImage src={session.user.image} alt="user profile" />
                )}
                <Text>{session.user?.name}님</Text>
                <LogoutText onClick={() => signOut()}>로그아웃</LogoutText>
              </UserInfo>
            </>
          ) : (
            <UploadButton onClick={() => signIn("google")}>로그인</UploadButton>
          )}
        </ButtonBox>
      </HeaderLayout>
    </WholeLayout>
  );
};

export default Header;
