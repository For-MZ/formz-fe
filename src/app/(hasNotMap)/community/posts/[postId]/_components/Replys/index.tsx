'use client';

import Button from '@/components/UI/Button';
import styles from './Replys.module.scss';
import { useState } from 'react';
import ChevronUpIcon from '/public/icons/chevron-up.svg';
import ChevronDownIcon from '/public/icons/chevron-down.svg';
import ReplyForm from './ReplyForm';
import ReplyList from './ReplyList';
import { Reply } from '@/types/Reply';
import { faker } from '@faker-js/faker';

type Props = {
  cmtChildCnt: number;
};

export default function Replys({ cmtChildCnt }: Props) {
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState<boolean>(false);
  const [isVisibleReplyList, setIsVisibleReplyList] = useState<boolean>(false);

  // getReplys(commentId)
  const replys: Reply[] = [
    {
      replyId: '1',
      content: '답글 1 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '김희진', profileImage: faker.image.avatarGitHub() },
      uploadTime: '1시간 전',
    },
    {
      replyId: '2',
      content: '답글 2 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '김희진', profileImage: faker.image.avatarGitHub() },
      uploadTime: '1시간 전',
    },
    {
      replyId: '3',
      content: '답글 3 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '김희진', profileImage: faker.image.avatarGitHub() },
      uploadTime: '1시간 전',
    },
    {
      replyId: '4',
      content: '답글 4 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '김희진', profileImage: faker.image.avatarGitHub() },
      uploadTime: '1시간 전',
      lastModifiedDate: '',
    },
    {
      replyId: '5',
      content: '답글 5 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '김희진', profileImage: faker.image.avatarGitHub() },
      uploadTime: '1시간 전',
      lastModifiedDate: '',
    },
  ];

  const toggleReplyForm = () => {
    setIsVisibleReplyForm((prev) => !prev);
  };

  const toggleReplyList = () => {
    setIsVisibleReplyList((prev) => !prev);
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
