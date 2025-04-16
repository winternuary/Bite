import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background-color: white;
  padding: 16px 28px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 360px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  margin: 12px 0 12px 0;
`;

export const Message = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #333;
  margin: 0 0 24px 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const CancelButton = styled.button`
  font-family: "Pretendard-Regular";
  padding: 8px 16px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d1d1d1;
  }
`;

export const ConfirmButton = styled.button`
  font-family: "Pretendard-Regular";
  padding: 8px 16px;
  background-color: #0073ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #005fe0;
  }
`;
