import styled from "styled-components";

export const Layout = styled.div`
  padding: 40px 200px;
`;

export const Title = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const LinkBox = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const RoomBox = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  gap: 20px;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PostTitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 500;
  margin: 4px 0 0 0;
`;

export const ParticipantInfo = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #666;
  margin: 0;
`;
