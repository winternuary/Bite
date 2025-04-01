import styled from "styled-components";

export const MainLayout = styled.div`
  margin: 60px 0 0 156px;
`;

export const CategoryBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#6B6B6B")};
  background-color: ${({ isSelected }) => (isSelected ? "#0073FF" : "#F3F4F5")};
  border: none;
  padding: 10px 32px;
  border-radius: 4px;
  font-weight: 500;
`;

export const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 74px;
  margin: 60px 0 50px 0;
`;

export const goods = styled.div`
  display: flex;
  flex-direction: column;
`;

export const goodsImage = styled.img``;

export const Title = styled.p`
  margin-top: 14px;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  color: #333333;
`;

export const SubTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Money = styled.p`
  margin-top: 4px;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;

export const PeopleBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const PeopleImg = styled.img``;

export const PeopleText = styled.p``;
