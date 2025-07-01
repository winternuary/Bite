import styled from "styled-components";

export const DetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 200px;
`;

export const DetailBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Goods = styled.img`
  width: 550px;
  height: 550px;
  border-radius: 12px;
  object-fit: cover;
  background-color: #f9f9f9;
`;

export const RightBox = styled.div`
  margin-left: 40px;
  width: 50%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
`;

export const Name = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 4px 0;
`;

export const Title = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 32px;
  font-weight: 550;
  margin: 0;
`;

export const PeopleBox = styled.div`
  display: flex;
  gap: 4px;
  margin: 20px 0 0 0;
`;

export const PeopleImg = styled.img``;

export const PeopleText = styled.p`
  margin: 0;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
`;

export const Money = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 550;
  color: #0073ff;
  margin: 10px 0 0 0;
`;

export const Explain = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 500;
  margin-top: 32px;
`;

export const LinkTitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: #333333;
  font-weight: 500;
  margin: 120px 0 0 0;
`;

export const Link = styled.a`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
  margin: 4px 0 0 0;
  color: #0073ff;
  text-decoration: underline;
`;

export const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  padding: 16px 180px;
  background-color: #0073ff;
  color: #ffffff;
  border: none;
  font-weight: 500;
  border-radius: 4px;
  margin-top: 40px;
  width: 100%;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
