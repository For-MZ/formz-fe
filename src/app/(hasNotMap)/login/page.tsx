'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Divider from '@/components/UI/Divider';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import LoginButton from '@/components/UI/LoginButton';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('이메일과 비밀번호를 모두 입력하세요.');
        return;
      }

      // 로그인 요청 보내기
      const response = await axios.post('/api/login', { email, password });

      // 로그인 성공
      console.log('로그인 성공:', response.data);

      // 여기에서 로그인 성공 시 다른 처리를 할 수 있습니다.
    } catch (error) {
      // 로그인 실패
      console.error('로그인 실패:', error.response?.data || error.message);
      console.log('Email:', email);
      console.log('Password:', password);
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    }
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 처리
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 처리
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>로그인</h2>
      <div className={styles.inputcontainer}>
        <div className={styles.inputId}>
          <TextField labelText="아이디" id="email" valueProp={email} onChangeProp={setEmail} />
        </div>

        <TextField labelText="비밀번호" type="password" id="password" valueProp={password} onChangeProp={setPassword} />
      </div>
      <div className={styles.error}>{error}</div>
      <div>
        <Link href="/login/find-password">
          <div className={styles.forgetText}>비밀번호를 잊으셨나요?</div>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <LoginButton type="default" handleLogin={handleLogin} /> {/* handleLogin 함수 전달 */}
        <Divider style="text" text="또는" />
        <div>
          <LoginButton type="kakaoTalk" handleLogin={handleKakaoLogin} /> {/* handleKakaoLogin 함수 전달 */}
        </div>
        <div style={{ marginTop: '16px' }}>
          <LoginButton type="google" handleLogin={handleGoogleLogin} /> {/* handleGoogleLogin 함수 전달 */}
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
