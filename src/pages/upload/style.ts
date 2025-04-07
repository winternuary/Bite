import styled from "styled-components";

export const UploadLayout = styled.div`
  background-color: #f9f9f9;
  padding: 50px 200px;
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

export const FileDropZone = styled.div`
  border: 1px dashed #ccc;
  border-radius: 6px;
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  gap: 10px;
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
