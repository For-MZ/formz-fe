'use client';

import React, { useState, useRef } from 'react';
import TextField from '@/components/UI/TextField';
import styles from './SignupForm.module.scss';
import eye from '/public/icons/eye.svg';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import Alert from '@/components/UI/Alert';
import Toast from '@/components/UI/Toast';
import { requestVerificationCode } from '../../(services)/requestVerificationCode';
import { submitForm } from '../../(services)/signupService';
import formValidatorUtils from '@/utils/formValidator';
import { Signup } from '@/types/auth';
import { checkNicknameAvailability } from '../../(services)/checkNicknameAvailability';
import axios from 'axios';

type ValidatorFunction = (value: string) => string;

type ApiResponse = {
  success: boolean;
  message: string;
};

export default function SignupForm() {
  const defaultProfileImage = '/image/user.png'; //맨 위로 올릴수도있다
  const fileInput = useRef<HTMLInputElement>(null);

  const initialFormState: Signup = {
    //인풋폼을 따로 제작해서 스테이트 관리 . custom hook, useReducer 등 참고
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
    verificationCode: '',
    verificationCodeError: '',
    showPassword: false,
    image: '/image/user.png',
    showAlert: false,
    submitSuccess: false,
    submitFail: false,
  };
  const [formState, setFormState] = useState<Signup>(initialFormState);
  const submitRequirements =
    formState.email &&
    formState.nickname &&
    formState.password &&
    formState.confirmPassword &&
    formValidatorUtils.emailRegEx.test(formState.email) &&
    formValidatorUtils.nicknameRegEx.test(formState.nickname) &&
    formValidatorUtils.passwordRegEx.test(formState.password) &&
    formValidatorUtils.passwordRegEx.test(formState.confirmPassword) &&
    formState.password === formState.confirmPassword &&
    formState.emailVerified;

  const authRequirements = formState.email && formValidatorUtils.emailRegEx.test(formState.email);
  const verifications =
    formState.verificationCode &&
    formValidatorUtils.verificationCodeRegEx.test(formState.verificationCode);

  const handleBlurField = (
    fieldName: keyof Signup,
    fieldValue: string,
    validator: ValidatorFunction,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [`${fieldName}Error` as keyof Signup]: validator(fieldValue),
    }));
  };

  const handleMailAuthClick = async () => {
    if (!authRequirements) {
      handleBlurField('email', formState.email, formValidatorUtils.validateEmail);
      return;
    } else {
      setFormState((prevState) => ({
        ...prevState,
        showEmailInput: true,
      }));
      try {
        await requestVerificationCode(formState.email); // API 서비스 함수 호출
      } catch (error) {
        // API 호출 실패 시 처리
        console.error('Error handling mail authentication click:', error);
        // 오류 처리를 추가할 수 있습니다.
      }
    }
  };

  const handleVerifyClick = async () => {
    if (!verifications) {
      handleBlurField(
        'verificationCode',
        formState.verificationCode,
        formValidatorUtils.validateVerificationCode,
      );
      return;
    }

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
  const toggleShowPassword = () => {
    setFormState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword, // 이전 상태의 반전값으로 설정
    }));
  };

  const handleCloseAlert = () => {
    //스테이트 분리 useModal 로 해서 없애셈
    setFormState((prevState) => ({
      ...prevState,
      showAlert: false,
    }));
    console.log(formState.showAlert);
  };

  const handleShowAlert = () => {
    setFormState((prevState) => ({
      ...prevState,
      showAlert: true,
    }));
    console.log(formState.showAlert);
  };

  const handleSubmit = async (): Promise<ApiResponse | undefined> => {
    if (!submitRequirements) {
      handleBlurField('email', formState.email, formValidatorUtils.validateEmail);
      handleBlurField('password', formState.password, formValidatorUtils.validatePassword);
      handleBlurField('confirmPassword', formState.confirmPassword, (confirmPassword) =>
        formValidatorUtils.validateConfirmPassword(formState.password, confirmPassword),
      );
      handleBlurField('nickname', formState.nickname, formValidatorUtils.validateNickname);
      return;
    }

    const formData = new FormData();
    formData.append('email', formState.email);
    formData.append('nickname', formState.nickname);
    formData.append('password', formState.password);

    if (formState.image) {
      formData.append('profileImage', formState.image);
    } else {
      formData.append('profileImage', defaultProfileImage);
    }

    try {
      const responseData = await submitForm(formData);
      setFormState((prevState) => ({
        ...prevState,
        submitSuccess: true,
      }));
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
      return responseData;
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        submitFail: true,
      }));
    }
  };

  const handleNicknameCheck = async () => {
    if (!submitRequirements) {
      handleBlurField('nickname', formState.nickname, formValidatorUtils.validateNickname);
      return;
    }

    try {
      const isAvailable = await checkNicknameAvailability(formState.nickname); // 닉네임 중복 확인 서비스 함수 호출
      if (isAvailable) {
        // 닉네임 사용 가능한 경우
        setFormState((prevState) => ({
          ...prevState,
          nicknameError: '닉네임 사용 가능',
        }));
      } else {
        // 닉네임이 이미 사용 중인 경우

        setFormState((prevState) => ({
          ...prevState,
          nicknameError: '닉네임이 이미 사용 중입니다.',
        }));
      }
    } catch (error) {
      // 닉네임 중복 확인 중 오류 발생 시 처리
      // 예를 들어, 오류 메시지를 보여줄 수 있습니다.

      setFormState((prevState) => ({
        ...prevState,
        nicknameError: '닉네임 중복 확인 중 오류 발생',
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
      setFormState((prevState) => ({
        ...prevState,
        image: defaultProfileImage,
      }));

      return;
    }

    console.log('이미지파일', file);
    // 이미지 화면에 띄우기
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        setFormState((prevState) => ({
          ...prevState,
          image: e.target?.result as string,
        }));
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
            onChange={(e) => setFormState((prevState) => ({ ...prevState, email: e.target.value }))}
            value={formState.email}
            hasError={!!formState.emailError}
            helpMessage={formState.emailError}
            labelText="이메일"
            placeholder="ForMZ@example.com"
            onBlur={() =>
              handleBlurField('email', formState.email, formValidatorUtils.validateEmail)
            }
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
              onChange={(e) =>
                setFormState((prevState) => ({ ...prevState, verificationCode: e.target.value }))
              }
              hasError={!!formState.verificationCodeError}
              helpMessage={formState.verificationCodeError}
              placeholder="숫자로 이루어진 인증번호를 입력해주세요."
              onBlur={() =>
                handleBlurField(
                  'verificationCode',
                  formState.verificationCode,
                  formValidatorUtils.validateVerificationCode,
                )
              }
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
              onChange={(e) =>
                setFormState((prevState) => ({ ...prevState, nickname: e.target.value }))
              }
              hasError={!!formState.nicknameError}
              helpMessage={formState.nicknameError}
              placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요."
              labelText="닉네임"
              maxLength={10}
              onBlur={() =>
                handleBlurField('nickname', formState.nickname, formValidatorUtils.validateNickname)
              }
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
          onChange={(e) =>
            setFormState((prevState) => ({ ...prevState, password: e.target.value }))
          }
          hasError={!!formState.passwordError}
          helpMessage={formState.passwordError}
          onBlur={() =>
            handleBlurField('password', formState.password, formValidatorUtils.validatePassword)
          }
          labelText="비밀번호"
        />
        <TextField
          className={styles.input}
          value={formState.confirmPassword}
          type={formState.showPassword ? 'text' : 'password'} // 비밀번호 보기 여부에 따라 type 변경
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              confirmPassword: e.target.value,
            }))
          }
          RightIcon={eye}
          RightIconOnClick={toggleShowPassword}
          labelText="비밀번호 확인"
          hasError={!!formState.confirmPasswordError}
          helpMessage={formState.confirmPasswordError}
          onBlur={() =>
            handleBlurField('confirmPassword', formState.confirmPassword, (confirmPassword) =>
              formValidatorUtils.validateConfirmPassword(formState.password, confirmPassword),
            )
          }
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
      {formState.submitSuccess && <Toast text="회원가입에 성공하였습니다." />}
      {formState.submitFail && <Toast type="error" text="회원가입에 실패하였습니다." />}
    </div>
  );
}
