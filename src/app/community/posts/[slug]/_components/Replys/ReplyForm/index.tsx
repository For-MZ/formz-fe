'use client';

import styles from './ReplyForm.module.scss';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { useEffect, useState } from 'react';

export default function ReplyForm() {
  const [replyValue, setReplyValue] = useState('');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState<boolean>(false);

  const handleChangeReplyValue = (value: string) => {
    setReplyValue(value);
  };

  useEffect(() => {
    if (!replyValue) {
      setIsVisibleMutationButtons(false);
    } else {
      setIsVisibleMutationButtons(true);
    }
  }, [replyValue]);

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ replyValue });
  };

  return (
    <form className={styles.replyForm} onSubmit={handleSubmitComment}>
      <div className={styles.replyInputBox}>
        {/* 로그인 유저 이미지 */}
        <img className={styles.replyUserProfileImage} src="/default-profile-image.png" alt="" />
        <TextField
          className={styles.replyInput}
          valueProp={replyValue}
          onChangeProp={handleChangeReplyValue}
          placeholder="댓글을 작성해주세요."
        />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttonsBox}>
          <Button className={styles.cancel} design="transparent" text="취소" onClick={() => setReplyValue('')} />
          <Button className={styles.write} design="transparent" text="작성" onClick={() => {}} />
        </div>
      )}
    </form>
  );
}
