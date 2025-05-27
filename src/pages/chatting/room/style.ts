import styled from "styled-components";

export const ChatLayout = styled.div`
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  margin-bottom: 16px;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  background: #e8f0fe;
  padding: 10px 14px;
  border-radius: 8px;
  width: fit-content;
  max-width: 60%;
  font-size: 15px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
`;

export const SendButton = styled.button`
  padding: 12px 20px;
  background-color: #0073ff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005fd0;
  }
`;
