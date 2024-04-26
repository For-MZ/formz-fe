'use client';

import React, { useState } from 'react';
import styles from './settings.module.scss';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import eye from '/public/icons/eye.svg';
import Toast from '@/components/UI/Toast';
import { Settings } from '@/types/User';
import formValidatorUtils from '@/utils/formValidator';

type ValidatorFunction = (value: string) => string;

export default function Settings() {
  const initialFormState: Settings = {
    showConfirm: false,
    password: '',
    passwordError: '',
    newPassword: '',
    newPasswordError: '',
    confirmNewPassword: '',
    confirmNewPasswordError: '',
    showPassword: false,
    changeSuccess: false,
    changeFail: false,
  };

  const [formState, setFormState] = useState<Settings>(initialFormState);
  const submitRequirements =
    formState.password &&
    formState.newPassword &&
    formState.confirmNewPassword &&
    formValidatorUtils.passwordRegEx.test(formState.password) &&
    formValidatorUtils.passwordRegEx.test(formState.newPassword) &&
    formValidatorUtils.passwordRegEx.test(formState.confirmNewPassword) &&
    formState.newPassword === formState.confirmNewPassword &&
    formState.password !== formState.newPassword;

  const handleBlurField = (
    fieldName: keyof Settings,
    fieldValue: string,
    validator: ValidatorFunction,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [`${fieldName}Error` as keyof Settings]: validator(fieldValue),
    }));
  };

  const toggleShowPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword, // 이전 상태의 반전값으로 설정
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    setFormState((prevState) => ({
      ...prevState,
      changeFail: false,
    }));

    if (!submitRequirements) {
      handleBlurField('password', formState.password, formValidatorUtils.validatePassword);
      handleBlurField('newPassword', formState.newPassword, (newPassword) =>
        formValidatorUtils.validateNewPassword(formState.password, newPassword),
      );
      handleBlurField('confirmNewPassword', formState.confirmNewPassword, (confirmNewPassword) =>
        formValidatorUtils.validateConfirmNewPassword(
          formState.password,
          formState.newPassword,
          confirmNewPassword,
        ),
      );

      return;
    }
    try {
      const response = await fetch('/api/password-change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: formState.password,
          newPassword: formState.newPassword,
          confirmNewPassword: formState.confirmNewPassword,
        }),
      });
      if (!response.ok) {
        throw new Error('Password change failed');
      }
      console.log('비밀번호 변경 성공');
      setFormState(initialFormState); // 폼 초기화
      setFormState((prevState) => ({
        ...prevState,
        changeSuccess: true,
      }));
    } catch (error) {
      console.log('비밀번호 변경 실패', error);
      setFormState(initialFormState); // 폼 초기화
      setFormState((prevState) => ({
        ...prevState,
        changeFail: true,
      }));
      console.log('Fail', formState.changeFail);
    }
  };

  return (
    <div className={styles.container}>
      <h2>계정 설정</h2>
      <div className={styles.subtitle}>비밀번호 변경</div>
      <div className={styles.inputcontainer}>
        <div className={styles.inputdetail}>
          <div className={styles.sttingsinput}>
            <TextField
              className={styles.input}
              type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
              RightIconOnClick={toggleShowPassword}
              RightIcon={eye}
              placeholder="현재 비밀번호를 입력해주세요."
              labelText="현재 비밀번호"
              value={formState.password}
              onChange={(e) =>
                setFormState((prevState) => ({ ...prevState, password: e.target.value }))
              }
              hasError={!!formState.passwordError}
              helpMessage={formState.passwordError}
              onBlur={() =>
                handleBlurField('password', formState.password, formValidatorUtils.validatePassword)
              }
            />
            <TextField
              className={styles.input}
              RightIcon={eye}
              type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
              RightIconOnClick={toggleShowPassword}
              placeholder="새 비밀번호를 입력해주세요."
              labelText="새 비밀번호"
              value={formState.newPassword}
              onChange={(e) =>
                setFormState((prevState) => ({ ...prevState, newPassword: e.target.value }))
              }
              hasError={!!formState.newPasswordError}
              helpMessage={formState.newPasswordError}
              onBlur={() =>
                handleBlurField('newPassword', formState.newPassword, (newPassword) =>
                  formValidatorUtils.validateNewPassword(formState.password, newPassword),
                )
              }
            />
            <TextField
              className={styles.input}
              type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
              RightIconOnClick={toggleShowPassword}
              RightIcon={eye}
              placeholder="새 비밀번호를 한 번 더 입력해주세요."
              labelText="새 비밀번호 확인"
              value={formState.confirmNewPassword}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  confirmNewPassword: e.target.value,
                }))
              }
              hasError={!!formState.confirmNewPasswordError}
              helpMessage={formState.confirmNewPasswordError}
              onBlur={() =>
                handleBlurField(
                  'confirmNewPassword',
                  formState.confirmNewPassword,
                  (confirmNewPassword) =>
                    formValidatorUtils.validateConfirmNewPassword(
                      formState.password,
                      formState.newPassword,
                      confirmNewPassword,
                    ),
                )
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.cancelbutton}>
        <Button design="filled" text="변경" onClick={handleSubmit} />
      </div>
      <Link href="/mypage/withdraw">
        <div className={styles.withdraw}>회원 탈퇴</div>
      </Link>

      {formState.changeFail && <Toast type="error" text="비밀번호 변경에 실패하였습니다." />}
      {formState.changeSuccess && <Toast text="비밀번호 변경에 성공하였습니다." />}
    </div>
  );
}
