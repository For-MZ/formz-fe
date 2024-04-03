'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Divider from '@/components/UI/Divider';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginButton from '@/components/UI/LoginButton';
import axios from 'axios';
import Toast from '@/components/UI/Toast';

type FormState = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  loginFail: boolean;
};

export default function Login() {
  const initialFormState: FormState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    loginFail: false,
  };
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const router = useRouter();

  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const submitRequirements =
    formState.email &&
    formState.password &&
    emailRegEx.test(formState.email) &&
    passwordRegEx.test(formState.password);

  const validateEmail = (email: string): string => {
    if (email.length < 1) {
      return '이메일을 입력해주세요.';
    } else if (!emailRegEx.test(email)) {
      return '올바른 이메일 형식으로 입력해주세요.';
    }
    return '';
  };

  const validatePassword = (password: string): string => {
    if (password.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!passwordRegEx.test(password)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    }
    return '';
  };

  const handleBlueEmail = () => {
    setFormState((prevState) => ({
      ...prevState,
      emailError: validateEmail(prevState.email),
    }));
  };

  const handleBluePassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      passwordError: validatePassword(prevState.password),
    }));
  };

  const handleLogin = async () => {
    setFormState((prevState) => ({
      ...prevState,
      loginFail: false,
    }));
    if (!submitRequirements) {
      handleBlueEmail();
      handleBluePassword();
      return;
    }
    try {
      // 로그인 요청 보내기
      const response = await axios.post('/api/login', {
        email: formState.email,
        password: formState.password,
      });

      // 로그인 성공
      console.log('로그인 성공:', response.data);

      const token = response.data.token;
      localStorage.setItem('token', token);

      router.push('/');
      // 여기에서 로그인 성공 시 다른 처리를 할 수 있습니다.
    } catch (error) {
      // 로그인 실패
      setFormState((prevState) => ({
        ...prevState,
        loginFail: true,
      }));
      console.log('Email:', formState.email);
      console.log('Password:', formState.password);
      console.log('emailcheck:', emailRegEx.test(formState.email));
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&scope=profile_nickname`;
  };

  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>로그인</h2>
      <div className={styles.inputcontainer}>
        <div className={styles.inputId}>
          <TextField
            className={styles.input}
            labelText="아이디"
            id="email"
            valueProp={formState.email}
            onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, email: value }))}
            hasError={!!formState.emailError}
            helpMessage={formState.emailError}
            onBlur={handleBlueEmail}
          />
        </div>

        <TextField
          className={styles.input}
          labelText="비밀번호"
          type="password"
          id="password"
          valueProp={formState.password}
          onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, password: value }))}
          hasError={!!formState.passwordError}
          helpMessage={formState.passwordError}
          onBlur={handleBluePassword}
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
          <LoginButton type="kakaoTalk" handleLogin={handleKakaoLogin} />{' '}
          {/* handleKakaoLogin 함수 전달 */}
        </div>
        <div style={{ marginTop: '16px' }}>
          <LoginButton type="google" handleLogin={handleGoogleLogin} />{' '}
          {/* handleGoogleLogin 함수 전달 */}
        </div>
      </div>
      <div className={styles.signup}>
        계정이 없으신가요?
        <Link href="/signup">
          <div className={styles.underline}>회원가입</div>
        </Link>
      </div>
      {formState.loginFail && <Toast type="error" text="로그인에 실패하였습니다." />}
    </div>
  );
}
