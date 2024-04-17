'use client';

import Button from '@/components/UI/Button';
import styles from './Replys.module.scss';
import { useState } from 'react';
import ChevronUpIcon from '/public/icons/chevron-up.svg';
import ChevronDownIcon from '/public/icons/chevron-down.svg';
import ReplyForm from '../ReplyForm';
import ReplyList from '../ReplyList';
import { useQuery } from '@tanstack/react-query';
import { getReplies } from '../../_services/getReplies';

type Props = {
  commentId: string;
  cmtChildCnt: number;
};

export default function ReplySection({ commentId, cmtChildCnt }: Props) {
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState(false);
  const [isVisibleReplyList, setIsVisibleReplyList] = useState(false);
  const { data: replies, refetch } = useQuery({
    queryKey: ['community', 'posts', 'comments', commentId, 'replies'],
    queryFn: getReplies,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const toggleReplyForm = () => {
    setIsVisibleReplyForm((prev) => !prev);
  };

  const toggleReplyList = () => {
    setIsVisibleReplyList((prev) => !prev);
    refetch(); // 답글 목록 토글링 시 리페치
  };

  return (
    <>
      <Button
        type="button"
        design="transparent"
        text="답글"
        className={styles.replyFormOpenButton}
        onClick={toggleReplyForm}
      />
      {isVisibleReplyForm && <ReplyForm commentId={commentId} />}
      {cmtChildCnt ? (
        <Button
          type="button"
          className={styles.replyListToggle}
          LeftIcon={isVisibleReplyList ? ChevronUpIcon : ChevronDownIcon}
          design="transparent"
          text={`답글 ${cmtChildCnt}개`}
          onClick={toggleReplyList}
        />
      ) : null}
      {isVisibleReplyList && <ReplyList replies={replies} />}
    </>
  );
}
