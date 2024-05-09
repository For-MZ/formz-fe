import React from 'react';
import styles from './house.module.scss';

export default function house() {
  return (
    <div className={styles.container}>
      <div className={styles.empty}>북마크한 행복 주택 게시글이 없습니다.</div>
    </div>
  );
}
