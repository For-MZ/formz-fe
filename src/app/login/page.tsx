'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Divider from '@/components/UI/Divider';
import TextFiled from '@/components/UI/TextFiled';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>로그인</h2>
      <div className={styles.inputId}>
        <TextFiled
          label="아이디(이메일)"
          inputId="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <TextFiled
          label="비밀번호"
          inputId="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className={styles.textForget}>비밀번호를 잊으셨나요?</div>
      </div>

      <div className={styles.buttonContainer}>
        <button style={{ width: '442px', height: '48px' }} onClick={handleLogin}>
          로그인
        </button>
        <Divider style="text" text="또는" />
        <div>
          <button style={{ width: '442px', height: '48px', marginBottom: '16px' }}>카카오로 로그인</button>
        </div>
        <div>
          <button style={{ width: '442px', height: '48px' }}>구글로 로그인</button>
        </div>
      </div>
      <div className={styles.signup}>
        계정이 없으신가요?
        <Link href="/signup">
          <div className={styles.underline}>회원가입</div>
        </Link>
      </div>
    </div>
  );
}
