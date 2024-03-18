import React from 'react';
import styles from './mypage.module.scss';
import Image from 'next/image';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';

export default function mypage() {
  return (
    <div className={styles.container}>
      <h2>내 프로필</h2>
      <Image className={styles.image} width={128} height={128} src="/image/user.png" />
      <div className={styles.inputcontainer}>
        <div>
          <TextField width="334px" labelText="닉네임" />
        </div>
        <div style={{ marginTop: '26px' }}>
          <Button type="outline" text="중복 확인" />
        </div>
      </div>
      <div>
        <TextField width="442px" labelText="이메일" disabled />
      </div>
      <div style={{ marginTop: '36px' }}>
        <Button type="filled" disabled text="변경 사항 저장" />
      </div>
    </div>
  );
}
