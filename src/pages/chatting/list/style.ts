import styled from "styled-components";

export const Layout = styled.div`
  padding: 40px 200px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const RoomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PostTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
