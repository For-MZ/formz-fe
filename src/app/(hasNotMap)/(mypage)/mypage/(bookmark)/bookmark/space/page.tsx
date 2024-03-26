import React from 'react';
import styles from './space.module.scss';

export default function space() {
  return (
    <div className={styles.container}>
      <div className={styles.empty}>북마크한 청년 공간 게시글이 없습니다.</div>
    </div>
  );
}
