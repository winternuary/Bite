"use client";

import styled from "styled-components";
import Link from "next/link";

export const HeaderLayout = styled.div`
  margin: 56px 156px 0 156px;
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
  font-size: 16px;
  color: #ffffff;
  background-color: #6df2a5;
  border: none;
  padding: 10px 32px;
  border-radius: 4px;
`;
export const Text = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: #808080;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Logo src="/BiteLogo.svg" />
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
