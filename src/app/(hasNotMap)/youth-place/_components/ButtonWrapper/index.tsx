'use client';

import Button from '@/components/UI/Button';
import styles from './ButtonWrapper.module.scss';
import ExternalLink from '/public/icons/external-link.svg';
import ThumbsUp from '/public/icons/thumbs-up.svg';

export default function ButtonWrapper() {
  return (
    <div className={styles.wrapper}>
      <Button text="예약 사이트로 바로가기" design="filled" LeftIcon={ExternalLink} />
      <Button text="이전 화면으로" design="outline" />
      <Button text="10" design="outline" LeftIcon={ThumbsUp} />
    </div>
  );
}
