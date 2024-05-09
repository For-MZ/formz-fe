import React from 'react';
import styles from './BookmarkNav.module.scss';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.container}>
      <h2>북마크</h2>
      <div className={styles.navcontainer}>
        <Link href="/mypage/bookmark/">
          <div>청년 정책</div>
        </Link>
        <Link href="/mypage/bookmark/house">
          <div>행복 주택</div>
        </Link>
        <Link href="/mypage/bookmark/space">
          <div>청년 공간</div>
        </Link>
        <Link href="/mypage/bookmark/community">
          <div>커뮤니티</div>
        </Link>
      </div>
    </div>
  );
}
