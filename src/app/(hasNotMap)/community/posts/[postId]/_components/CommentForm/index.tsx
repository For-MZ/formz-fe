'use client';

import styles from './CommentForm.module.scss';
import { useEffect, useState } from 'react';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { createComment } from '../../_services/createComment';
import useInput from '@/hooks/useInput';
import Avatar from '@/components/UI/Avatar';

export default function CommentForm() {
  const { postId }: { postId: string } = useParams();
  const [commentValue, handleChangeCommentValue, initValue] = useInput('');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => createComment({ userId: '1', postId, content: commentValue }),
    onMutate: async () => {},
    onSuccess: (data) => {
      alert('댓글 작성 성공');
      queryClient.invalidateQueries({
        queryKey: ['community', 'posts', postId, 'comments'],
      });
      initValue();
    },
    onError: () => {
      alert('댓글 작성 실패');
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
  };

  useEffect(() => {
    if (!commentValue) {
      setIsVisibleMutationButtons(false);
    } else {
      setIsVisibleMutationButtons(true);
    }
  }, [commentValue]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <Avatar size="lg" imageUrl="/default-profile-image.png" nickname="" />
        <TextField
          className={styles.commentForm}
          value={commentValue}
          onChange={handleChangeCommentValue}
          placeholder="댓글을 작성해주세요."
        />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttons}>
          <Button
            type="button"
            design="outline"
            text="취소"
            onClick={initValue}
            className={styles.cancel}
          />
          <Button type="submit" design="filled" text="댓글 작성" className={styles.confirm} />
        </div>
      )}
    </form>
  );
}
