'use client';

import useInput from '@/hooks/useInput';
import styles from './CommentsForm.module.scss';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { useEffect, useState } from 'react';

export default function CommentsForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentValue, _, setCommentValue] = useInput('');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState<boolean>(false);

  const handleChangeCommentValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
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
        <img className={styles.userAvatar} src="/default-profile-image.png" alt="" />
        <TextField value={commentValue} onChange={handleChangeCommentValue} placeholder="댓글을 작성해주세요." />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttons}>
          <Button type="filled" text="취소" disabled={false} onClick={() => setCommentValue('')} />
          <Button type="filled" text="작성" disabled={false} onClick={() => {}} />
        </div>
      )}
    </form>
  );
}
