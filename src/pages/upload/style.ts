import styled from "styled-components";

export const UploadLayout = styled.div`
  background-color: #f9f9f9;
  padding: 50px 200px 200px 200px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const UploadForm = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  height: 140px;
  resize: none;
`;

export const CountText = styled.p`
  text-align: right;
  font-size: 14px;
  color: #888;
  margin-top: 4px;
`;

export const FileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface FileDropZoneProps {
  $dragActive?: boolean;
}

export const FileDropZone = styled.div<FileDropZoneProps>`
  border: 2px dashed ${({ $dragActive }) => ($dragActive ? "#0073ff" : "#ccc")};
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  max-width: 240px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $dragActive }) =>
    $dragActive ? "#eef6ff" : "#fafafa"};
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 140px;
  object-fit: cover;
  border-radius: 6px;
`;

export const FileIcon = styled.div`
  font-size: 32px;
`;

export const FileText = styled.p`
  font-size: 14px;
  color: #999;
`;

export const FileButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
`;

export const UploadButton = styled.button`
  background-color: #0073ff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  float: right;
  margin: 20px 0 70px 0;
`;

interface FileDropZoneProps {
  $dragActive?: boolean;
}

export const CategoryBox = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
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
  cursor: pointer;
`;
