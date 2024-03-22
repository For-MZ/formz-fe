'use client';

import React, { useState } from 'react';
import TextField from '@/components/UI/TextField';
import styles from '@/app/signup/Signup.module.scss';
import Link from 'next/link';
import eye from '../../../public/icons/eye.svg';
import axios, { AxiosResponse } from 'axios';
import Button from '@/components/UI/Button';
import Image from 'next/image';

type SignupData = {
  email: string;
  nickname: string;
  password: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [nicknameAvailable, setNicknameAvailable] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const requestVerificationCode = async (email: string): Promise<void> => {
    try {
      const response = await axios.post('/api/send-verif  cation-code', { email });
      console.log('Verification code request successful:', response.data);
    } catch (error) {
      console.error('Error requesting verification code:', error);
      // 요청이 실패했을 때 실행할 코드를 작성합니다.
    }
  };

  const handleMailAuthClick = async () => {
    setShowEmailInput(true);
    requestVerificationCode(email); // 인증 번호를 요청
  };
  const handleVerifyClick = async () => {
    console.log('인증번호', verificationCode);
    try {
      // 사용자가 입력한 인증번호와 백엔드에서 받은 인증번호를 비교
      if (verificationCode === receivedVerificationCode) {
        console.log('Verification successful');
        // 인증 성공 처리
      } else {
        console.error('Verification failed');
        setVerificationError('인증번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      setVerificationError('인증 과정에서 오류가 발생했습니다.');
    }
  };
  const handleSubmit = async (): Promise<ApiResponse> => {
    console.log('Email:', email);
    console.log('Nickname:', nickname);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmPassword);

    try {
      const response: AxiosResponse<ApiResponse> = await axios.post<SignupData, AxiosResponse<ApiResponse>>(
        '/api/sign-up', // 회원가입을 처리하는 API 엔드포인트의 경로를 지정해주세요
        { email, nickname, password }, // 회원가입 요청에 필요한 데이터
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
      const response = await axios.post('/api/check-nickname', { nickname });
      if (response.data.available) {
        // 닉네임 사용 가능한 경우
        setNicknameAvailable(true);
        console.log('닉네임 사용 가능');
      } else {
        // 닉네임이 이미 사용 중인 경우
        setNicknameAvailable(false);
        console.log('닉네임이 이미 사용 중입니다.');
      }
    } catch (error) {
      // 오류 처리
      console.error('닉네임 중복 확인 중 오류 발생:', error);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log('Email:', event.target.value);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    console.log('Nickname:', event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log('Password:', event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    console.log('Confirm Password:', event.target.value);
    setPasswordMatch(password === event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>회원가입</h2>

      <div className={styles.emailcontainer}>
        <div className={styles.test}>
          <TextField
            onChange={handleEmailChange}
            id="email"
            name="email"
            value={email}
            width="334px"
            labelText="이메일"
            placeholder="ForMZ@example.com"
          />
        </div>
        <div style={{ marginLeft: '8px', marginTop: '26px' }}>
          <Button width="100px" design="outline" onClick={handleMailAuthClick} text="메일 인증" disabled={false} />
        </div>
      </div>

      {showEmailInput && (
        <div className={styles.emailcontainer}>
          <div className={styles.test} style={{ marginTop: '22px' }}>
            <TextField
              value={verificationCode}
              width="334px"
              placeholder="인증 번호를 입력해주세요."
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <div>
            <div style={{ marginLeft: '8px', marginTop: '26px' }}>
              <Button
                width="100px"
                design="outline"
                text="인증 확인"
                disabled={false}
                onClick={() => console.log('클릭')}
              />
            </div>
          </div>
          {verificationError && <div style={{ color: 'red', marginTop: '8px' }}>{verificationError}</div>}
        </div>
      )}
      <div className={styles.name}>
        <div className={styles.namecontainer}>
          <div className={styles.test}>
            <TextField
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요."
              width="334px"
              labelText="닉네임"
            />
          </div>
          <div style={{ marginLeft: '8px', marginTop: '26px' }}>
            <Button width="100px" design="outline" text="중복 확인" disabled={false} onClick={handleNicknameCheck} />
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <TextField
          width="442px"
          onChange={handlePasswordChange}
          value={password}
          type="password"
          RightIcon={eye}
          placeholder="영문 대소문자, 숫자, 특수 문자 포함 8자 이상"
          labelText="비밀번호"
        />
        <TextField
          width="442px"
          value={confirmPassword}
          type="password"
          onChange={handleConfirmPasswordChange}
          RightIcon={eye}
          labelText="비밀번호 확인"
        />
      </div>
      <div className={styles.profile}>
        <div style={{ marginTop: '36px', marginBottom: '36px' }}>프로필 이미지 (선택)</div>
        <div>
          <Image src="/image/profile.png" width="128" height="128" />
        </div>
      </div>
      <div>
        <Button onClick={handleSubmit} width="442px" design="filled" disabled={false} text="회원가입" />
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
