'use client';

import styles from './CommentEditForm.module.scss';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import useInput from '@/hooks/useInput';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from '@tanstack/react-query';
import { editComment } from '../../_services/editComment';

type Props = {
  commentId: string;
  content: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export default function CommentEditForm({ commentId, content, setIsEditing }: Props) {
  const [value, handleChange] = useInput(content);
  const { mutate } = useMutation({
    mutationFn: () => editComment({ commentId, content: value }),
    onSuccess: () => {
      // TODO 토스트 UI
      alert('댓글 수정 성공');
      // TODO getPosts invalidate
    },
    onError: () => {
      alert('댓글 수정 실패');
      // TODO 토스트 UI
    },
  });

  return (
    <form className={styles.container}>
      <TextField className={styles.textField} value={value} onChange={handleChange} />
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
          text="댓글 수정"
          className={styles.edit}
          onClick={() => mutate()}
        />
      </div>
    </form>
  );
}
