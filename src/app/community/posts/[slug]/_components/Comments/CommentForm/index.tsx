'use client';

import useInput from '@/hooks/useInput';
import styles from './CommentForm.module.scss';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { useEffect, useState } from 'react';

export default function CommentForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentValue, _, setCommentValue] = useInput('');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState<boolean>(false);

  const handleChangeCommentValue = (commentValue: string) => {
    setCommentValue(commentValue);
  };

  useEffect(() => {
    if (!commentValue) {
      setIsVisibleMutationButtons(false);
    } else {
      setIsVisibleMutationButtons(true);
    }
  }, [commentValue]);

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ commentValue });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitComment}>
      <div className={styles.input}>
        {/* 로그인 유저 이미지 */}
        <img className={styles.userAvatar} src="/default-profile-image.png" alt="" />
        <TextField
          className={styles.commentForm}
          valueProp={commentValue}
          onChangeProp={handleChangeCommentValue}
          placeholder="댓글을 작성해주세요."
        />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttons}>
          <Button design="transparent" text="취소" onClick={() => setCommentValue('')} />
          <Button design="filled" text="댓글 작성" onClick={() => {}} />
        </div>
      )}
    </form>
  );
}
