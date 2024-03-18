import React from 'react';
import styles from './mypage.module.scss';
import Image from 'next/image';
import TextField from '@/components/UI/TextField';

export default function mypage() {
  return (
    <div className={styles.container}>
      <h2>내 프로필</h2>
      <Image className={styles.image} width={128} height={128} src="/image/user.png" />
      <div className={styles.inputcontainer}>
        <div>
          <TextField width="350px" label="닉네임" />
        </div>
        <div>
          <button className={styles.test} style={{ width: '84px', height: '48px' }}>
            중복 확인
          </button>
        </div>
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
