'use client';

import styles from './CommentForm.module.scss';
import { useEffect, useState } from 'react';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { createComment } from '../../_services/createComment';
import useInput from '@/hooks/useInput';

export default function CommentForm() {
  const { postId }: { postId: string } = useParams();
  const [commentValue, handleChangeCommentValue, initValue] = useInput('');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState(false);
  const { mutate } = useMutation({
    mutationFn: () => createComment({ userId: '1', postId, content: commentValue }),
    onSuccess: (data) => {
      alert('댓글 작성 성공');
      // TODO getComments invalidate
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
        {/* 로그인 유저 이미지 */}
        <img className={styles.userAvatar} src="/default-profile-image.png" alt="" />
        <TextField
          className={styles.commentForm}
          value={commentValue}
          onChange={handleChangeCommentValue}
          placeholder="댓글을 작성해주세요."
        />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttons}>
          <Button type="button" design="outline" text="취소" onClick={initValue} />
          <Button type="submit" design="filled" text="댓글 작성" />
        </div>
      )}
    </form>
  );
}
