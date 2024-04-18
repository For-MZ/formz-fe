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
import { Login } from '@/types/auth';
import formValidatorUtils from '@/utils/formValidator';
import useToken from '@/hooks/useToken';

type ValidatorFunction = (value: string) => string;

export default function Login() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
  const { setToken, setRefreshToken } = useToken();

  const initialFormState: Login = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    loginFail: false,
  };
  const [formState, setFormState] = useState<Login>(initialFormState);
  const router = useRouter();

  const handleBlurField = (
    fieldName: keyof Login,
    fieldValue: string,
    validator: ValidatorFunction,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [`${fieldName}Error` as keyof Login]: validator(fieldValue),
    }));
  };
  const submitRequirements =
    formState.email &&
    formState.password &&
    formValidatorUtils.emailRegEx.test(formState.email) &&
    formValidatorUtils.passwordRegEx.test(formState.password);

  const handleLogin = async () => {
    setFormState((prevState) => ({
      ...prevState,
      loginFail: false,
    }));

    if (!submitRequirements) {
      handleBlurField('email', formState.email, formValidatorUtils.validateEmail);
      handleBlurField('password', formState.password, formValidatorUtils.validatePassword);
      return;
    }
    try {
      const response = await axios.post('/api/login', {
        email: formState.email,
        password: formState.password,
      });
      console.log('로그인 성공:', response.data);
      const { token, refreshToken } = response.data;

      localStorage.setItem('isLogin', 'true');
      setToken(token);
      setRefreshToken(refreshToken);
      router.push('/');
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        loginFail: true,
      }));
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
            value={formState.email}
            onChange={(e) => setFormState((prevState) => ({ ...prevState, email: e.target.value }))}
            onBlur={() =>
              handleBlurField('email', formState.email, formValidatorUtils.validateEmail)
            }
            hasError={!!formState.emailError}
            helpMessage={formState.emailError}
          />
        </div>

        <TextField
          className={styles.input}
          labelText="비밀번호"
          type="password"
          id="password"
          value={formState.password}
          onChange={(e) =>
            setFormState((prevState) => ({ ...prevState, password: e.target.value }))
          }
          onBlur={() =>
            handleBlurField('password', formState.password, formValidatorUtils.validatePassword)
          }
          hasError={!!formState.passwordError}
          helpMessage={formState.passwordError}
        />
      </div>
      <div>
        <Link href="/login/find-password">
          <div className={styles.forgetText}>비밀번호를 잊으셨나요?</div>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <LoginButton type="default" handleLogin={handleLogin} />
        <Divider style="text" text="또는" />
        <div>
          <LoginButton type="kakaoTalk" handleLogin={handleKakaoLogin} />
        </div>
        <div style={{ marginTop: '16px' }}>
          <LoginButton type="google" handleLogin={handleGoogleLogin} />
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
