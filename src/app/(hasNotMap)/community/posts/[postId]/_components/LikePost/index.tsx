'use client';

import Button from '@/components/UI/Button';
import styles from './LikePost.module.scss';
import LikeIcon from '/public/icons/thumbs-up.svg';

type Props = {
  isLike?: boolean;
  likeCnt?: number;
};

export default function LikePost({ isLike, likeCnt }: Props) {
  return (
    <div className={styles.container}>
      <Button design="transparent" onClick={() => {}}>
        {isLike ? (
          <LikeIcon fill="black" width="20" height="20" />
        ) : (
          <LikeIcon width="20" height="20" />
        )}
      </Button>
      <span className={styles.likeCount}>{likeCnt}</span>
    </div>
  );
}
