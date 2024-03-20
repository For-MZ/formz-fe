import React from 'react';
import styles from './settings.module.scss';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import Button from '@/components/UI/Button';

export default function Settings() {
  return (
    <div className={styles.container}>
      <h2>계정 설정</h2>
      <div className={styles.inputcontainer}>
        <div>
          <TextField disabled width="357px" labelText="비밀번호" />
        </div>
        <div style={{ marginTop: '26px' }}>
          <Button text="변경" design="outline" disabled={false} />
        </div>
      </div>
      <Link href="/mypage/withdraw">
        <div className={styles.withdraw}>회원 탈퇴</div>
      </Link>
    </div>
  );
}
