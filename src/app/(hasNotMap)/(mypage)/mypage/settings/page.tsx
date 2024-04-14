'use client';

import React, { useState } from 'react';
import styles from './settings.module.scss';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import Confirm from '@/components/UI/Confirm';
import eye from '/public/icons/eye.svg';
import axios from 'axios';
import Toast from '@/components/UI/Toast';

type FormState = {
  showConfirm: boolean;
  password: string;
  passwordError: string;
  newPassword: string;
  newPasswordError: string;
  confirmPassword: string;
  confirmPasswordError: string;
  showPassword: boolean;
  changeSuccess: boolean;
  changeFail: boolean;
};

type ApiResponse = {
  success: boolean;
  message: string;
};

export default function Settings() {
  const initialFormState: FormState = {
    showConfirm: false,
    password: '',
    passwordError: '',
    newPassword: '',
    newPasswordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
    showPassword: false,
    changeSuccess: false,
    changeFail: false,
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const submitRequirements =
    formState.password &&
    formState.newPassword &&
    formState.confirmPassword &&
    passwordRegEx.test(formState.password) &&
    passwordRegEx.test(formState.newPassword) &&
    passwordRegEx.test(formState.confirmPassword) &&
    formState.newPassword === formState.confirmPassword &&
    formState.password !== formState.newPassword;

  const toggleShowPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword, // 이전 상태의 반전값으로 설정
    }));
  };

  const validatePassword = (password: string): string => {
    if (password.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!passwordRegEx.test(password)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    }
    return '';
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string,
    newPassword: string,
  ): string => {
    if (confirmPassword.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!passwordRegEx.test(confirmPassword)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    } else if (newPassword !== confirmPassword) {
      return '비밀번호가 일치하지 않습니다.';
    } else if (password === newPassword && password === confirmPassword) {
      return '현재 비밀번호와 새 비밀번호가 같습니다.';
    }
    return '';
  };

  const handleBlurPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      passwordError: validatePassword(prevState.password),
    }));
  };

  const handleBlurNewPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      newPasswordError: validatePassword(prevState.newPassword),
    }));
  };

  const handleBlurConfirmPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      confirmPasswordError: validateConfirmPassword(
        prevState.password,
        prevState.confirmPassword,
        prevState.newPassword,
      ),
    }));
  };

  const handleSubmit = async (): Promise<ApiResponse | undefined> => {
    if (!submitRequirements) {
      handleBlurPassword();
      handleBlurNewPassword();
      handleBlurConfirmPassword();
      return;
    }
    try {
      const response = await axios.post('/api/password-change', {
        password: formState.password,
        newPassword: formState.newPassword,
        confirmPassword: formState.confirmPassword,
      });
      console.log('비밀번호 변경 성공', response.data);
      setFormState((prevState) => ({
        ...prevState,
        showConfirm: false,
        password: '',
        passwordError: '',
        newPassword: '',
        newPasswordError: '',
        confirmPassword: '',
        confirmPasswordError: '',
        showPassword: false,
        changeSuccess: true,
      }));
    } catch (error) {
      console.log('변겅실패, 에러', error);
      setFormState((prevState) => ({
        ...prevState,
        showConfirm: false,
        password: '',
        passwordError: '',
        newPassword: '',
        newPasswordError: '',
        confirmPassword: '',
        confirmPasswordError: '',
        showPassword: false,
        changeFail: true,
      }));
    }
  };

  const handleCancel = () => {
    setFormState((prevState) => ({
      ...prevState,
      showConfirm: false,
      password: '',
      passwordError: '',
      newPassword: '',
      newPasswordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
      showPassword: false,
    }));
  };

  const handleChangeButton = () => {
    setFormState((prevState) => ({
      ...prevState,
      showConfirm: true,
    }));
  };

  return (
    <div className={styles.container}>
      <h2>계정 설정</h2>
      <div className={styles.inputcontainer}>
        <div className={styles.inputdetail}>
          <div className={styles.sttingsinput}>
            <TextField className={styles.input} type="password" disabled labelText="비밀번호" />
          </div>
          <div>
            <Button
              className={styles.button}
              onClick={handleChangeButton}
              text="변경"
              design="outline"
              disabled={false}
            />
          </div>
        </div>
      </div>
      <Link href="/mypage/withdraw">
        <div className={styles.withdraw}>회원 탈퇴</div>
      </Link>
      <div>
        {/* Confirm 모달 */}
        {formState.showConfirm && (
          <Confirm
            onConfirm={handleSubmit} // 확인 버튼을 클릭할 때 실행되는 함수
            onCancel={handleCancel} // 취소 버튼을 클릭할 때 실행되는 함수
            heading="비밀번호 변경" // 모달의 제목
            rightButtonText="변경" // 확인 버튼의 텍스트
          >
            <TextField
              type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
              RightIconOnClick={toggleShowPassword}
              RightIcon={eye}
              placeholder="현재 비밀번호를 입력해주세요."
              labelText="현재 비밀번호"
              valueProp={formState.password}
              onChangeProp={(value) =>
                setFormState((prevState) => ({ ...prevState, password: value }))
              }
              hasError={!!formState.passwordError}
              helpMessage={formState.passwordError}
              onBlur={handleBlurPassword}
            />
            <div className={styles.password}>
              <TextField
                RightIcon={eye}
                type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
                RightIconOnClick={toggleShowPassword}
                placeholder="새 비밀번호를 입력해주세요."
                labelText="새 비밀번호"
                valueProp={formState.newPassword}
                onChangeProp={(value) =>
                  setFormState((prevState) => ({ ...prevState, newPassword: value }))
                }
                hasError={!!formState.newPasswordError}
                helpMessage={formState.newPasswordError}
                onBlur={handleBlurNewPassword}
              />
            </div>
            <div>
              <TextField
                type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
                RightIconOnClick={toggleShowPassword}
                RightIcon={eye}
                placeholder="새 비밀번호를 한 번 더 입력해주세요."
                labelText="새 비밀번호 확인"
                valueProp={formState.confirmPassword}
                onChangeProp={(value) =>
                  setFormState((prevState) => ({ ...prevState, confirmPassword: value }))
                }
                hasError={!!formState.confirmPasswordError}
                helpMessage={formState.confirmPasswordError}
                onBlur={handleBlurConfirmPassword}
              />
            </div>
          </Confirm>
        )}
      </div>
      {formState.changeFail && <Toast type="error" text="비밀번호 변경에 실패하였습니다." />}
      {formState.changeSuccess && <Toast text="비밀번호 변경에 성공하였습니다." />}
    </div>
  );
}
