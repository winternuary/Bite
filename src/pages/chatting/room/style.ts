import styled from "styled-components";

export const ChatLayout = styled.div`
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const RoomTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface MessageProps {
  $sender: "me" | "other";
}

export const Message = styled.div<MessageProps>`
  align-self: ${({ $sender }) =>
    $sender === "me" ? "flex-end" : "flex-start"};
  background: ${({ $sender }) => ($sender === "me" ? "#fff59d" : "#e8f0fe")};
  color: #000;
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 60%;
  position: relative;
  font-size: 15px;
  line-height: 1.4;

  /* 말풍선 꼬리 */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    ${({ $sender }) =>
      $sender === "me"
        ? `
      right: -8px;
      border-left: 8px solid #fff59d;
      border-top: 8px solid transparent;
      border-bottom: 0 solid transparent;
    `
        : `
      left: -8px;
      border-right: 8px solid #e8f0fe;
      border-top: 8px solid transparent;
      border-bottom: 0 solid transparent;
    `}
  }
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
