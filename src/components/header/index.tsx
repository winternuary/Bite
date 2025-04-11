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
  align-items: center;
  gap: 20px;
`;
export const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: #ffffff;
  background-color: #0073ff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
`;
export const Text = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: #808080;
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
              <Text>{session.user?.name}님</Text>
              <Button onClick={() => signOut()}>로그아웃</Button>
              <Link href="/upload">
                <Button>물건 올리기</Button>
              </Link>
            </>
          ) : (
            <Button onClick={() => signIn("google")}>로그인</Button>
          )}
        </ButtonBox>
      </HeaderLayout>
    </WholeLayout>
  );
};

export default Header;
