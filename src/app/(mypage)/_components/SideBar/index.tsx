import React from 'react';
import styles from './SideBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.width}>
        <h2 className={styles.h2}>로고</h2>
        <div className={styles.gap}>
          <Link href="/mypage">
            <div>
              <Image width={14} height={14} src="/icons/user.png" /> 내 프로필
            </div>
          </Link>
          <Link href="/mypage/bookmark">
            <div>
              <Image width={14} height={14} src="/icons/heart.png" />
              저장한 컨텐츠
            </div>
          </Link>
          <Link href="/mypage/write">
            <div>
              <Image width={14} height={14} src="/icons/edit-3.png" />
              작성 이력
            </div>
          </Link>
          <Link href="/mypage/settings">
            <div>
              <Image width={14} height={14} src="/icons/settings.png" /> 계정 설정
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
