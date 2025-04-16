"use client";

import * as S from "./style";

interface ConfirmModalProps {
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "확인",
  cancelText = "취소",
}: ConfirmModalProps) => {
  return (
    <S.Overlay>
      <S.ModalBox>
        {title && <S.Title>{title}</S.Title>}
        <S.Message>{message}</S.Message>
        <S.ButtonRow>
          <S.CancelButton onClick={onCancel}>{cancelText}</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>{confirmText}</S.ConfirmButton>
        </S.ButtonRow>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default ConfirmModal;
