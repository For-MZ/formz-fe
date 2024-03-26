'use client';

import Button from '@/components/UI/Button';
import styles from './Replys.module.scss';
import { useState } from 'react';
import ChevronUpIcon from '/public/icons/chevron-up.svg';
import ChevronDownIcon from '/public/icons/chevron-down.svg';
import ReplyForm from './ReplyForm';
import ReplyList from './ReplyList';

// type Props = {
//   isVisibleReplyForm: boolean;
// };

export default function Replys() {
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState<boolean>(false);
  const [isVisibleReplyList, setIsVisibleReplyList] = useState<boolean>(false);

  return (
    <>
      <Button
        design="transparent"
        text="답글"
        className={styles.replyFormOpenButton}
        onClick={() => setIsVisibleReplyForm((prev) => !prev)}
      />
      {isVisibleReplyForm && <ReplyForm />}
      <Button
        className={styles.replyListToggle}
        LeftIcon={isVisibleReplyList ? ChevronUpIcon : ChevronDownIcon}
        design="transparent"
        text="답글 3개"
        onClick={() => setIsVisibleReplyList((prev) => !prev)}
      />
      {isVisibleReplyList && <ReplyList />}
    </>
  );
}
