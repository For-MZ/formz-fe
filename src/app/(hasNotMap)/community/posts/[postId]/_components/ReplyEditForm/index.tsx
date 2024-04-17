'use client';

import styles from './ReplyEditForm.module.scss';
import Button from '@/components/UI/Button';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { editReply } from '../../_services/editReply';

type Props = {
  replyId: string;
  content: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export default function ReplyEditForm({ replyId, content, setIsEditing }: Props) {
  const [value, handleChange] = useInput(content);
  const { mutate } = useMutation({
    mutationFn: () => editReply({ replyId, content: value }),
    onSuccess: () => {
      // TODO 토스트 UI
      alert('답글 수정 성공');
      // TODO getPosts invalidate
    },
    onError: () => {
      alert('답글 수정 실패');
      // TODO 토스트 UI
    },
  });

  return (
    <form className={styles.container}>
      <TextField value={value} onChange={handleChange} />
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          design="outline"
          text="취소"
          onClick={() => setIsEditing(false)}
          className={styles.cancel}
        />
        <Button
          type="button"
          design="filled"
          text="답글 수정"
          className={styles.edit}
          onClick={() => mutate()}
        />
      </div>
    </form>
  );
}
