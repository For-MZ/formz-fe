'use client';

import Button from '@/components/UI/Button';
import styles from './Replys.module.scss';
import { useState } from 'react';
import ChevronUpIcon from '/public/icons/chevron-up.svg';
import ChevronDownIcon from '/public/icons/chevron-down.svg';
import ReplyForm from './ReplyForm';
import ReplyList from './ReplyList';
import { Reply } from '@/types/Reply';
import { useQuery } from '@tanstack/react-query';
import { getReplys } from '../../_services/getReplys';

type Props = {
  commentId: string;
  cmtChildCnt: number;
};

export default function Replys({ commentId, cmtChildCnt }: Props) {
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState<boolean>(false);
  const [isVisibleReplyList, setIsVisibleReplyList] = useState<boolean>(false);

  const { data: replys, refetch } = useQuery<
    Reply[],
    unknown,
    Reply[],
    [_1: string, _2: string, _3: string, _4: string, _5: string]
  >({
    queryKey: ['community', 'posts', 'comments', commentId, 'replys'],
    queryFn: getReplys,
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
      <ReplyForm isVisibleReplyForm={isVisibleReplyForm} />

      {cmtChildCnt === 0 ? null : (
        <Button
          type="button"
          className={styles.replyListToggle}
          LeftIcon={isVisibleReplyList ? ChevronUpIcon : ChevronDownIcon}
          design="transparent"
          text={`답글 ${cmtChildCnt}개`}
          onClick={toggleReplyList}
        />
      )}
      <ReplyList isVisibleReplyList={isVisibleReplyList} replys={replys} />
    </>
  );
}
