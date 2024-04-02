'use client';

import styles from './ThumbsUpComment.module.scss';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';

type Props = {
  cmtLikeCnt: number;
};

export default function ThumbsUpComment({ cmtLikeCnt }: Props) {
  return (
    <div className={styles.thumbsUpBox}>
      <button className={styles.button}>
        <ThumbsUpIcon />
      </button>
      <span>{cmtLikeCnt}</span>
    </div>
  );
}
