'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Divider from '@/components/UI/Divider';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import LoginButton from '@/components/UI/LoginButton';
import axios from 'axios';

export default function Login() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const handleLogin = async () => {
    try {
      if (!email && !password) {
        setEmailError('이메일을 입력하세요.');
        setPasswordError('비밀번호를 입력하세요.');
        return;
      } else if (!emailRegEx.test(email)) {
        setEmailError('올바른 이메일 형식으로 입력해주세요.');
        return;
      } else {
        setEmailError('');
        setPasswordError('');
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
      console.log('emailcheck:', emailRegEx.test(email));
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&scope=profile_nickname`;
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 처리
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>로그인</h2>
      <div className={styles.inputcontainer}>
        <div className={styles.inputId}>
          <TextField
            labelText="아이디"
            id="email"
            valueProp={email}
            onChangeProp={setEmail}
            hasError={!!emailError}
            helpMessage={emailError}
            onBlur={() => {
              if (email.length < 1) {
                setEmailError('이메일을 입력하세요.');
              } else if (email.length > 0 && emailRegEx.test(email)) {
                setEmailError('');
              } else if (!emailRegEx.test(email)) {
                setEmailError('올바른 이메일 형식으로 입력해주세요.');
              }
            }}
          />
        </div>

        <TextField
          labelText="비밀번호"
          type="password"
          id="password"
          valueProp={password}
          onChangeProp={setPassword}
          hasError={!!passwordError}
          helpMessage={passwordError}
          onBlur={() => {
            if (password.length < 1) {
              setPasswordError('비밀번호를 입력하세요.');
            } else if (password.length > 0) {
              setPasswordError('');
            }
          }}
        />
      </div>
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
