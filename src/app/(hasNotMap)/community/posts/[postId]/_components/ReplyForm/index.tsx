'use client';

import styles from './ReplyForm.module.scss';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useInput from '@/hooks/useInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReply } from '../../_services/createReply';
import Avatar from '@/components/UI/Avatar';

type Props = {
  commentId: string;
  content?: string;
  setIsVisibleReplyList: Dispatch<SetStateAction<boolean>>;
};

export default function ReplyForm({ commentId, content, setIsVisibleReplyList }: Props) {
  const [replyValue, handleChangeReplyValue, initValue] = useInput(content || '');
  const [isVisibleMutationButtons, setIsVisibleMutationButtons] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => createReply({ commentId, content: replyValue }),
    onSuccess: (data) => {
      alert('답글 작성 성공');
      queryClient.invalidateQueries({
        queryKey: ['community', 'posts', 'comments', commentId, 'replies'],
      });
      setIsVisibleReplyList(true); // 답글 리스트 열기
      initValue();
    },
    onError: () => {
      alert('답글 작성 실패');
    },
  });

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
  };

  useEffect(() => {
    if (!replyValue) {
      setIsVisibleMutationButtons(false);
    } else {
      setIsVisibleMutationButtons(true);
    }
  }, [replyValue]);

  return (
    <form className={styles.replyForm} onSubmit={handleSubmitComment}>
      <div className={styles.replyInputBox}>
        <Avatar imageUrl={'/default-profile-image.png'} nickname={''} />
        <TextField
          className={styles.replyInput}
          value={replyValue}
          onChange={handleChangeReplyValue}
          placeholder="답글을 작성해주세요."
        />
      </div>
      {isVisibleMutationButtons && (
        <div className={styles.buttonsBox}>
          <Button
            type="button"
            className={styles.cancel}
            design="outline"
            text="취소"
            onClick={() => {
              initValue();
            }}
          />
          <Button type="submit" className={styles.write} design="filled" text="답글 작성" />
        </div>
      )}
    </form>
  );
}
