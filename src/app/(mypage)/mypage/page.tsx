import React from 'react';
import styles from './mypage.module.scss';
import Image from 'next/image';
import TextField from '@/components/UI/TextField';

export default function mypage() {
  return (
    <div className={styles.container}>
      <h2>내 프로필</h2>
      <Image className={styles.image} width={128} height={128} src="/image/user.png" />
      <div className={styles.input}>
        <TextField label="닉네임" />
      </div>
      <div>
        <TextField label="이메일" disabled />
      </div>

      <button style={{ width: '112px', height: '36px' }} className={styles.button}>
        변경 사항 저장
      </button>
    </div>
  );
}
