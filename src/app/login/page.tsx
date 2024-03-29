'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Divider from '@/components/UI/Divider';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import LoginButton from '@/components/UI/LoginButton';

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
        <TextField
          labelText="아이디"
          id="email"
          value={email}
          width="442px"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <TextField
          labelText="비밀번호"
          id="password"
          value={password}
          width="442px"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className={styles.forgetText}>비밀번호를 잊으셨나요?</div>
      </div>

      <div className={styles.buttonContainer}>
        <LoginButton type="default" />
        <Divider style="text" text="또는" />
        <div>
          <LoginButton type="kakaoTalk" />
        </div>
        <div style={{ marginTop: '16px' }}>
          <LoginButton type="google" />
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
