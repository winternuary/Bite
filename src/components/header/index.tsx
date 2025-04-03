"use client";

import styled from "styled-components";
import Link from "next/link";

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
  return (
    <HeaderLayout>
      <Link href="/">
        <Logo src="/BiteLogo.svg" />
      </Link>
      <ButtonBox>
        {/* <Text>김영은님</Text> */}
        <Link href="/login">
          <Button>로그인</Button>
        </Link>
        {/* <Button>물건 올리기</Button> */}
      </ButtonBox>
    </HeaderLayout>
  );
};

export default Header;
