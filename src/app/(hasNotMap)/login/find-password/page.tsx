'use client';

import React, { useState } from 'react';
import styles from './Find.module.scss';
import TextField from '@/components/UI/TextField';
import formValidatorUtils from '@/utils/formValidator';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import { FindPassword } from '@/types/auth';

type ValidatorFunction = (value: string) => string;

export default function FindPassword() {
  const initialFormState: FindPassword = {
    email: '',
    emailError: '',
    emailVerified: false,
  };
  const [formState, setFormState] = useState<FindPassword>(initialFormState);

  const handleVerifyClick = () => {
    if (formValidatorUtils.emailRegEx.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailVerified: true,
      }));
    }
    return handleBlurField('email', formState.email, formValidatorUtils.validateEmail);
  };

  const handleTest = () => {
    setFormState((prevState) => ({
      ...prevState,
      emailVerified: false,
    }));
  };

  const handleBlurField = (
    fieldName: keyof FindPassword,
    fieldValue: string,
    validator: ValidatorFunction,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [`${fieldName}Error` as keyof FindPassword]: validator(fieldValue),
    }));
  };
  return (
    <div className={styles.container}>
      {!formState.emailVerified && (
        <>
          <h2 className={styles.h2}>비밀번호 재설정</h2>
          <div>비밀번호를 잃어버리셨나요?</div>
          <div>ForMZ에 가입한 이메일을 정확히 입력해주세요. </div>
          <div className={styles.margin}>이메일을 통해 비밀번호 변경 링크가 전송됩니다.</div>
          <div className={styles.inputcontainer}>
            <div className={styles.inputId}>
              <TextField
                className={styles.input}
                labelText="아이디"
                id="email"
                placeholder="ForMZ@example.com"
                value={formState.email}
                onChange={(e) =>
                  setFormState((prevState) => ({ ...prevState, email: e.target.value }))
                }
                hasError={!!formState.emailError}
                helpMessage={formState.emailError}
                onBlur={() =>
                  handleBlurField('email', formState.email, formValidatorUtils.validateEmail)
                }
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.submitbutton}
              design="filled"
              disabled={false}
              text="인증 메일 전송하기"
              onClick={handleVerifyClick}
            />
          </div>
        </>
      )}
      {formState.emailVerified && (
        <>
          <h2 className={styles.h2}>비밀번호 설정 메일 발송</h2>
          <div>{formState.email} </div>
          <div>위 주소로 비밀번호 설정 메일이 전송되었습니다.</div>
          <div>메일을 확인해주세요.</div>
          <div>(몇 분 내로 확인되지 않으면 스팸 메일함을 확인해주세요.)</div>
          <div className={styles.verifiedButtonContainer}>
            <div className={styles.verifiedbutton}>
              <Button
                className={styles.verifiedbutton}
                design="outline"
                disabled={false}
                text="이전 페이지로 이동"
                onClick={handleTest}
              />
            </div>
            <div className={styles.verifiedbutton}>
              <Link href="/">
                <Button
                  className={styles.verifiedbutton}
                  design="filled"
                  disabled={false}
                  text="메인 페이지로 이동"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
