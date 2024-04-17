'use client';

import Button from '@/components/UI/Button';
import styles from './ReplyMutation.module.scss';
import { useMutation } from '@tanstack/react-query';
import { deleteReply } from '../../_services/deleteReply';
import useModal from '@/hooks/useModal';
import Confirm from '@/components/UI/Confirm';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export default function ReplyMutation({ setIsEditing }: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const { mutate } = useMutation({
    mutationFn: () => deleteReply(),
    onSuccess: () => {
      // TODO 토스트 UI
      alert('댓글 삭제 성공');
      // TODO getPosts invalidate
    },
    onError: () => {
      alert('댓글 삭제 실패');
      // TODO 토스트 UI
    },
  });

  return (
    <div className={styles.mutationZone}>
      <Button design="transparent" text="수정" onClick={() => setIsEditing(true)} />
      <Button design="transparent" text="삭제" className={styles.delete} onClick={openModal} />
      {isOpen && (
        <Confirm
          heading="해당 답글을 삭제하시겠습니까? 복구할 수 없습니다."
          onClickCancelButton={closeModal}
          onClickRightButton={mutate}
          rightButtonText="삭제"
        />
      )}
    </div>
  );
}
