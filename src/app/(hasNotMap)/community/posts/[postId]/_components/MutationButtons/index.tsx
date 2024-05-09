'use client';

import Button from '@/components/UI/Button';
import styles from './MutationButtons.module.scss';
import { useParams, useRouter } from 'next/navigation';
import Confirm from '@/components/UI/Confirm';
import useModal from '@/hooks/useModal';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../../_services/deletePost';

export default function MutationButtons() {
  const { postId } = useParams();
  const { push } = useRouter();
  const { isOpen, openModal, closeModal } = useModal();
  const { mutate } = useMutation({
    mutationFn: () => deletePost(postId as string),
    onSuccess: () => {
      // TODO 토스트 UI
      alert('게시글 삭제 성공');
      push('/community/posts');
      // TODO getPosts invalidate
    },
    onError: () => {
      alert('게시글 삭제 실패');
      // TODO 토스트 UI
    },
  });

  return (
    <div className={styles.mutationButtons}>
      <Button
        role="link"
        type="button"
        design="transparent"
        text="수정"
        className={styles.edit}
        onClick={() => push(`/community/posts/${postId}/edit`)}
      />
      <Button design="transparent" text="삭제" className={styles.delete} onClick={openModal} />
      {isOpen && (
        <Confirm
          heading="해당 게시글을 삭제하시겠습니까? 복구할 수 없습니다."
          onClickCancelButton={closeModal}
          onClickRightButton={mutate}
          rightButtonText="삭제"
        />
      )}
    </div>
  );
}
