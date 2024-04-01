'use client';

import styles from './ActionButtons.module.scss';
import LinkIcon from '/public/icons/link.svg';
import BookmarkIcon from '/public/icons/bookmark.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';

type Props = {
  isLike: boolean;
  isBookmark: boolean;
};

export default function ActionButtons({ isLike, isBookmark }: Props) {
  return (
    <div className={styles.utilButtons}>
      <button onClick={() => {}}>
        <LinkIcon width="20" height="20" />
      </button>
      <button onClick={() => {}}>
        {isBookmark ? <BookmarkIcon fill="black" width="20" height="20" /> : <BookmarkIcon width="20" height="20" />}
      </button>
      <div className={styles.thumbsUpBox}>
        <button onClick={() => {}}>
          {isLike ? <ThumbsUpIcon fill="black" width="20" height="20" /> : <ThumbsUpIcon width="20" height="20" />}
        </button>
        <span>{}</span>
      </div>
    </div>
  );
}
