'use client';

import React, { useState, useRef } from 'react';
import TextField from '@/components/UI/TextField';
import styles from './Signup.module.scss';
import Link from 'next/link';
import eye from '/public/icons/eye.svg';
import axios, { AxiosResponse } from 'axios';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import Alert from '@/components/UI/Alert';

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
  showPassword: boolean;
  image: string;
  showAlert: boolean;
};

type ApiResponse = {
  success: boolean;
  message: string;
};

export default function Signup() {
  const defaultProfileImage = '/image/user.png';

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
    showPassword: false,
    image: '/image/user.png',
    showAlert: false,
  };
  const fileInput = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const nicknameRegEx = /^[a-zA-Z0-9가-힣]{2,10}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const toggleShowPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword, // 이전 상태의 반전값으로 설정
    }));
  };

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
    if (emailRegEx.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        showEmailInput: true,
      }));
      requestVerificationCode(formState.email); // 인증 번호를 요청
    } else if (formState.email.length < 1) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: '이메일을 입력해주세요.',
      }));
    } else if (!emailRegEx.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: '올바른 이메일 형식으로 입력해주세요.',
      }));
    }
  };
  const handleShowAlert = () => {
    setFormState((prevState) => ({
      ...prevState,
      showAlert: true,
    }));
    console.log(formState.showAlert);
  };

  const handleCloseAlert = () => {
    setFormState((prevState) => ({
      ...prevState,
      showAlert: false,
    }));
    console.log(formState.showAlert);
  };

  const handleVerifyClick = async () => {
    console.log('인증번호', formState.verificationCode);
    try {
      // 사용자가 입력한 인증번호와 백엔드에서 받은 인증번호를 비교
      if (formState.verificationCode === receivedVerificationCode) {
        console.log('Verification successful');
        setFormState((prevState) => ({
          ...prevState,
          showEmailInput: false,
          emailVerified: true,
        }));
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

  const handleSubmit = async (): Promise<ApiResponse | undefined> => {
    // 필수 입력 항목 체크
    if (!formState.email || !formState.nickname || !formState.password || !formState.confirmPassword) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: !formState.email ? '이메일을 입력해주세요.' : '',
        nicknameError: !formState.nickname ? '닉네임을 입력해주세요.' : '',
        passwordError: !formState.password ? '비밀번호를 입력해주세요.' : '',
        confirmPasswordError: !formState.confirmPassword ? '비밀번호를 입력해주세요.' : '',
      }));
      return;
    }

    // 유효성 검사
    const errors: Partial<FormState> = {};
    if (!emailRegEx.test(formState.email)) errors.emailError = '올바른 이메일 형식으로 입력해주세요.';
    if (!formState.emailVerified) errors.emailError = '메일 인증을 받아주세요.';
    if (!nicknameRegEx.test(formState.nickname)) errors.nicknameError = '올바른 닉네임 형식으로 입력해주세요.';
    if (!passwordRegEx.test(formState.password))
      errors.passwordError = '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    if (formState.password !== formState.confirmPassword) errors.confirmPasswordError = '비밀번호가 일치하지 않습니다.';

    if (Object.keys(errors).length > 0) {
      setFormState((prevState) => ({ ...prevState, ...errors }));
      return;
    }
    // FormData 객체 생성
    const formData = new FormData();
    formData.append('email', formState.email);
    formData.append('nickname', formState.nickname);
    formData.append('password', formState.password);

    // 프로필 이미지가 있는 경우에만 FormData에 추가
    if (formState.image) {
      formData.append('profileImage', formState.image);
    } else {
      // 파일을 업로드하지 않은 경우 기본 프로필 이미지를 추가
      formData.append('profileImage', defaultProfileImage);
    }

    try {
      const response: AxiosResponse<ApiResponse> = await axios.post<FormData, AxiosResponse<ApiResponse>>(
        '/api/sign-up', // 회원가입을 처리하는 API 엔드포인트의 경로
        formData, // FormData 객체 전달
        {
          headers: {
            'Content-Type': 'multipart/form-data', // 파일 업로드 시 필수
          },
        },
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
          nicknameError: '닉네임 사용 가능',
        }));
      } else {
        // 닉네임이 이미 사용 중인 경우
        setFormState((prevState) => ({
          ...prevState,
          nicknameError: '닉네임이 이미 사용 중입니다.',
          nicknameAvailable: false,
        }));
      }
    } catch (error) {
      // 오류 처리
      setFormState((prevState) => ({
        ...prevState,
        nicknameError: '닉네임 중복 확인 중 오류 발생',
        nicknameAvailable: false,
      }));
    }
  };

  const handleProfileImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 선택된 파일 가져오기
    if (!file) return;

    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      // 파일 크기가 2MB를 초과하는 경우 모달 표시
      handleShowAlert();
      event.target.value = '';
      return;
    }

    console.log('이미지파일', file);
    // 이미지 화면에 띄우기
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        setFormState((prevState) => ({ ...prevState, image: e.target?.result as string }));
      }
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const imageRes = await axios.post('/api/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const imageURL = imageRes.data.imageURL;

      // 이미지 업로드 성공 시 imageURL을 formState에 저장
      setFormState((prevState) => ({
        ...prevState,
        image: imageURL,
      }));
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>회원가입</h2>

      <div className={styles.emailcontainer}>
        <div className={styles.inputwidth}>
          <TextField
            className={styles.input}
            onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, email: value }))}
            id="email"
            valueProp={formState.email}
            hasError={!!formState.emailError}
            helpMessage={formState.emailError}
            labelText="이메일"
            placeholder="ForMZ@example.com"
            onBlur={() => {
              if (formState.email.length < 1) {
                setFormState((prevState) => ({ ...prevState, emailError: '이메일을 입력해주세요.' }));
              } else if (formState.email.length > 0 && emailRegEx.test(formState.email)) {
                setFormState((prevState) => ({ ...prevState, emailError: '' }));
              } else if (!emailRegEx.test(formState.email)) {
                setFormState((prevState) => ({ ...prevState, emailError: '올바른 이메일 형식으로 입력해주세요.' }));
              }
            }}
          />
        </div>

        <div>
          {!formState.emailVerified && (
            <Button
              className={styles.button}
              design="outline"
              onClick={handleMailAuthClick}
              text="메일 인증"
              disabled={false}
            />
          )}
          {formState.emailVerified && (
            <Button className={styles.button} design="outline" text="인증 완료" disabled={true} />
          )}
        </div>
      </div>

      {formState.showEmailInput && (
        <div className={styles.emailcontainer}>
          <div className={styles.inputwidth} style={{ marginTop: '22px' }}>
            <TextField
              className={styles.input}
              value={formState.verificationCode}
              hasError={!!formState.verificationError}
              helpMessage={formState.verificationError}
              onBlur={() => {
                if (formState.verificationCode.length < 1) {
                  setFormState((prevState) => ({ ...prevState, verificationError: '인증번호를 입력해주세요.' }));
                } else if (formState.verificationCode.length > 0) {
                  setFormState((prevState) => ({ ...prevState, verificationError: '' }));
                }
              }}
              placeholder="인증 번호를 입력해주세요."
              onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, verificationCode: value }))}
            />
          </div>

          <div>
            <Button
              className={styles.authbutton}
              design="outline"
              text="인증 확인"
              disabled={false}
              onClick={handleVerifyClick}
            />
          </div>
        </div>
      )}
      <div className={styles.name}>
        <div className={styles.namecontainer}>
          <div className={styles.inputwidth}>
            <TextField
              className={styles.input}
              value={formState.nickname}
              onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, nickname: value }))}
              hasError={!!formState.nicknameError}
              helpMessage={formState.nicknameError}
              placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요."
              labelText="닉네임"
              maxLength={10}
              onBlur={() => {
                if (formState.nickname.length < 1) {
                  setFormState((prevState) => ({ ...prevState, nicknameError: '닉네임을 입력해주세요.' }));
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
            <Button
              className={styles.button}
              design="outline"
              text="중복 확인"
              disabled={false}
              onClick={handleNicknameCheck}
            />
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <TextField
          className={styles.input}
          value={formState.password}
          type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
          RightIcon={eye}
          RightIconOnClick={toggleShowPassword}
          placeholder="영문 대소문자, 숫자, 특수 문자 포함 8자 이상"
          maxLength={20}
          onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, password: value }))}
          hasError={!!formState.passwordError}
          helpMessage={formState.passwordError}
          onBlur={() => {
            if (formState.password.length < 1) {
              setFormState((prevState) => ({ ...prevState, passwordError: '비밀번호를 입력해주세요.' }));
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
          className={styles.input}
          value={formState.confirmPassword}
          type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
          onChangeProp={(value) => setFormState((prevState) => ({ ...prevState, confirmPassword: value }))}
          RightIcon={eye}
          RightIconOnClick={toggleShowPassword}
          labelText="비밀번호 확인"
          hasError={!!formState.confirmPasswordError}
          helpMessage={formState.confirmPasswordError}
          onBlur={() => {
            if (formState.confirmPassword.length < 1) {
              setFormState((prevState) => ({ ...prevState, confirmPasswordError: '비밀번호를 입력해주세요.' }));
            } else if (formState.password !== formState.confirmPassword) {
              setFormState((prevState) => ({ ...prevState, confirmPasswordError: '비밀번호가 일치하지 않습니다.' }));
            } else if (formState.password === formState.confirmPassword) {
              setFormState((prevState) => ({ ...prevState, confirmPasswordError: '' }));
            }
          }}
        />
        <div> 프로필 이미지(선택)</div>
      </div>

      <div className={styles.profilecontainer}>
        <div className={styles.profile}>
          <a href="#" onClick={() => fileInput.current?.click()}>
            <Image src={formState.image} width={150} height={150} />
          </a>
          <input
            type="file"
            name="image_URL"
            id="input-file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInput}
            onChange={handleProfileImageUpload}
          />
          {formState.showAlert && (
            <Alert heading="이미지 용량 초과" onClose={handleCloseAlert}>
              2MB 이내의 파일을 업로드해주세요.
            </Alert>
          )}
        </div>
      </div>

      <div className={styles.submitbutton}>
        <Button
          className={styles.submitbutton}
          onClick={handleSubmit}
          design="filled"
          disabled={false}
          text="회원가입"
        />
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
