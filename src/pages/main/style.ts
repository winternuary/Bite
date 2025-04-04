import styled from "styled-components";

export const MainLayout = styled.div`
  margin: 20px 200px 0 200px;
`;

export const CategoryBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#5A5A5A")};
  background-color: ${({ isSelected }) => (isSelected ? "#0073FF" : "#ffffff")};
  border: ${({ isSelected }) => (isSelected ? "none" : "solid 1px #e8e8e8")};
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 500;
`;

export const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  margin: 60px 0 50px 0;
`;

export const goods = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  padding: 20px;
  border-radius: 12px;
`;

export const goodsImage = styled.img``;

export const Title = styled.p`
  margin: 12px 0 0 0;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: #333333;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const SubTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
export const Money = styled.p`
  font-family: "Pretendard-Regular";
  margin: 5px 0 0 0;
  font-size: 18px;
  font-weight: 600;
  color: #0073ff;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Profile = styled.img``;
export const ProfileName = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`;
export const PeopleBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const PeopleImg = styled.img``;

export const PeopleText = styled.p`
  color: #505050;
`;
