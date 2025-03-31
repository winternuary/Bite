"use client";

import styled from "styled-components";
import Image from "next/image";

export const HeaderLayout = styled.div`
  margin: 56px 156px 0 156px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img``;
export const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #ffffff;
  background-color: #6df2a5;
  border: none;
  padding: 10px 32px;
  border-radius: 4;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Logo src="/BiteLogo.svg " />
      <Button>로그인</Button>
    </HeaderLayout>
  );
};

export default Header;
