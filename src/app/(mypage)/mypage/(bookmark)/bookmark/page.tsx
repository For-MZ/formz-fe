import React from 'react';
import styles from './bookmark.module.scss';

export default function Bookmark() {
  return (
    <div className={styles.container}>
      <div className={styles.empty}>북마크한 청년 정책 게시글이 없습니다.</div>
    </div>
  );
}
