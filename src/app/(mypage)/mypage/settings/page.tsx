import React from 'react';
import styles from './settings.module.scss';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';

export default function Settings() {
  return (
    <div className={styles.container}>
      <h2>계정 설정</h2>
      <div className={styles.inputcontainer}>
        <div>
          <TextField disabled width="350px" label="비밀번호" />
        </div>
        <div>
          <button className={styles.test} style={{ width: '84px', height: '48px' }}>
            변경
          </button>
        </div>
      </div>
      <Link href="/mypage/withdraw">
        <div className={styles.withdraw}>회원 탈퇴</div>
      </Link>
    </div>
  );
}
