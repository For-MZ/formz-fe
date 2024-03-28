'use client';

import React, { useState } from 'react';
import TextField from '@/components/UI/TextField';
import styles from './Signup.module.scss';
import Link from 'next/link';
import eye from '/public/icons/eye.svg';
import axios, { AxiosResponse } from 'axios';
import Button from '@/components/UI/Button';
import Image from 'next/image';

type FormState = {
  email: string;
  emailError: string;
  nickname: string;
  nicknameError: string;
  password: string;
  passwordError: string;
  showEmailInput: boolean;
  confirmPassword: string;
  confirmPasswordError: string;
  emailVerified: boolean;
  nicknameAvailable: boolean;
  passwordMatch: boolean;
  verificationCode: string;
  verificationError: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
};

type SignupData = {
  email: string;
  nickname: string;
  password: string;
};

export default function Signup() {
  const initialFormState: FormState = {
    email: '',
    emailError: '',
    nickname: '',
    nicknameError: '',
    password: '',
    passwordError: '',
    showEmailInput: false,
    confirmPassword: '',
    confirmPasswordError: '',
    emailVerified: false,
    nicknameAvailable: false,
    passwordMatch: true,
    verificationCode: '',
    verificationError: '',
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const nicknameRegEx = /^[a-zA-Z0-9가-힣]{2,10}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const requestVerificationCode = async (email: string): Promise<void> => {
    try {
      const response = await axios.post('/api/send-verification-code', { email });
      console.log('Verification code request successful:', response.data);
    } catch (error) {
      console.error('Error requesting verification code:', error);
      // 요청이 실패했을 때 실행할 코드를 작성합니다.
    }
  };

  const handleMailAuthClick = async () => {
    setFormState((prevState) => ({
      ...prevState,
      showEmailInput: true,
    }));
    requestVerificationCode(formState.email); // 인증 번호를 요청
  };

  const handleVerifyClick = async () => {
    console.log('인증번호', formState.verificationCode);
    try {
      // 사용자가 입력한 인증번호와 백엔드에서 받은 인증번호를 비교
      if (formState.verificationCode === receivedVerificationCode) {
        console.log('Verification successful');
        // 인증 성공 처리
      } else {
        console.error('Verification failed');
        setFormState((prevState) => ({
          ...prevState,
          verificationError: '인증번호가 일치하지 않습니다.',
        }));
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      setFormState((prevState) => ({
        ...prevState,
        verificationError: '인증 과정에서 오류가 발생했습니다.',
      }));
    }
  };

  const handleSubmit = async (): Promise<ApiResponse> => {
    console.log('Email:', formState.email);
    console.log('Nickname:', formState.nickname);
    console.log('Password:', formState.password);
    console.log('ConfirmPassword:', formState.confirmPassword);

    try {
      const response: AxiosResponse<ApiResponse> = await axios.post<SignupData, AxiosResponse<ApiResponse>>(
        '/api/sign-up', // 회원가입을 처리하는 API 엔드포인트의 경로를 지정해주세요
        { email: formState.email, nickname: formState.nickname, password: formState.password }, // 회원가입 요청에 필요한 데이터
      );
      return response.data; // 서버 응답을 반환합니다.
    } catch (error) {
      // 오류 처리
      console.error('회원가입 요청 중 오류 발생:', error);
      throw error;
    }
  };

  const handleNicknameCheck = async () => {
    try {
      const response = await axios.post('/api/check-nickname', { nickname: formState.nickname });
      if (response.data.available) {
        // 닉네임 사용 가능한 경우
        setFormState((prevState) => ({
          ...prevState,
          nicknameAvailable: true,
        }));
        console.log('닉네임 사용 가능');
      } else {
        // 닉네임이 이미 사용 중인 경우
        setFormState((prevState) => ({
          ...prevState,
          nicknameAvailable: false,
        }));
        console.log('닉네임이 이미 사용 중입니다.');
      }
    } catch (error) {
      // 오류 처리
      console.error('닉네임 중복 확인 중 오류 발생:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>회원가입</h2>

      <div className={styles.emailcontainer}>
        <div className={styles.test}>
          <TextField
            onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, email: value }))}
            id="email"
            valueProp={formState.email}
            hasError={!!formState.emailError}
            helpMessage={formState.emailError}
            labelText="이메일"
            placeholder="ForMZ@example.com"
            onBlur={() => {
              if (formState.email.length < 1) {
                setFormState((prevState) => ({ ...prevState, emailError: '이메일을 입력하세요.' }));
              } else if (formState.email.length > 0 && emailRegEx.test(formState.email)) {
                setFormState((prevState) => ({ ...prevState, emailError: '' }));
              } else if (!emailRegEx.test(formState.email)) {
                setFormState((prevState) => ({ ...prevState, emailError: '올바른 이메일 형식으로 입력해주세요.' }));
              }
            }}
          />
        </div>
        <div style={{ marginLeft: '8px', marginTop: '26px' }}>
          <Button width="100px" design="outline" onClick={handleMailAuthClick} text="메일 인증" disabled={false} />
        </div>
      </div>

      {formState.showEmailInput && (
        <div className={styles.emailcontainer}>
          <div className={styles.test} style={{ marginTop: '22px' }}>
            <TextField
              value={formState.verificationCode}
              placeholder="인증 번호를 입력해주세요."
              onChange={(e) => setFormState((prevState) => ({ ...prevState, verificationCode: e.target.value }))}
            />
          </div>
          <div>
            <div className={styles.button} style={{ marginLeft: '8px', marginTop: '26px' }}>
              <Button design="outline" text="인증 확인" disabled={false} onClick={handleVerifyClick} />
            </div>
          </div>
          {formState.verificationError && (
            <div style={{ color: 'red', marginTop: '8px' }}>{formState.verificationError}</div>
          )}
        </div>
      )}
      <div className={styles.name}>
        <div className={styles.namecontainer}>
          <div className={styles.test}>
            <TextField
              value={formState.nickname}
              onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, nickname: value }))}
              hasError={!!formState.nicknameError}
              helpMessage={formState.nicknameError}
              placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요."
              labelText="닉네임"
              maxLength={10}
              onBlur={() => {
                if (formState.nickname.length < 1) {
                  setFormState((prevState) => ({ ...prevState, nicknameError: '닉네임을 입력하세요.' }));
                } else if (formState.nickname.length > 0 && nicknameRegEx.test(formState.nickname)) {
                  setFormState((prevState) => ({ ...prevState, nicknameError: '' }));
                } else if (!nicknameRegEx.test(formState.nickname)) {
                  setFormState((prevState) => ({
                    ...prevState,
                    nicknameError: '올바른 닉네임 형식으로 입력해주세요.',
                  }));
                }
              }}
            />
          </div>
          <div>
            <div className={styles.button} style={{ marginLeft: '8px', marginTop: '26px' }}>
              <Button design="outline" text="중복 확인" disabled={false} onClick={handleNicknameCheck} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <TextField
          value={formState.password}
          type="password"
          RightIcon={eye}
          placeholder="영문 대소문자, 숫자, 특수 문자 포함 8자 이상"
          maxLength={20}
          onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, password: value }))}
          hasError={!!formState.passwordError}
          helpMessage={formState.passwordError}
          onBlur={() => {
            if (formState.password.length < 1) {
              setFormState((prevState) => ({ ...prevState, passwordError: '비밀번호를 입력하세요.' }));
            } else if (formState.password.length > 0 && passwordRegEx.test(formState.password)) {
              setFormState((prevState) => ({ ...prevState, passwordError: '' }));
            } else if (!passwordRegEx.test(formState.password)) {
              setFormState((prevState) => ({
                ...prevState,
                passwordError: '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.',
              }));
            }
          }}
          labelText="비밀번호"
        />
        <TextField
          value={formState.confirmPassword}
          type="password"
          onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, confirmPassword: value }))}
          RightIcon={eye}
          labelText="비밀번호 확인"
          hasError={!!formState.confirmPasswordError}
          helpMessage={formState.confirmPasswordError}
          onBlur={() => {
            if (formState.password === formState.confirmPassword) {
              setFormState((prevState) => ({ ...prevState, confirmPasswordError: '' }));
            } else if (formState.password !== formState.confirmPassword) {
              setFormState((prevState) => ({ ...prevState, confirmPasswordError: '비밀번호가 일치하지 않습니다.' }));
            }
          }}
        />
      </div>
      <div className={styles.profile}>
        <div style={{ marginTop: '36px', marginBottom: '36px' }}>프로필 이미지 (선택)</div>
        <div>
          <Image src="/image/profile.png" width="128" height="128" />
        </div>
      </div>
      <div className={styles.button}>
        <Button onClick={handleSubmit} design="filled" disabled={false} text="회원가입" />
      </div>
      <div className={styles.login}>
        이미 계정이 있으신가요?
        <Link href="/login">
          <div className={styles.underline}>로그인</div>
        </Link>
      </div>
    </div>
  );
}
