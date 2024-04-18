'use client';

import React, { useState, useRef } from 'react';
import styles from './mypage.module.scss';
import Image from 'next/image';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import axios from 'axios';
import Toast from '@/components/UI/Toast';
import { useUserInfo } from '@/hooks/useUserInfo';
import Alert from '@/components/UI/Alert';
import { MyPage } from '@/types/User';
import formValidatorUtils from '@/utils/formValidator';

type ValidatorFunction = (value: string) => string;

export default function mypage() {
  const defaultProfileImage = '/image/user.png';
  const userInfo = useUserInfo();
  const fileInput = useRef<HTMLInputElement>(null);
  const initialFormState: MyPage = {
    nickname: '',
    isNicknameAvailable: false,
    isSaveEnabled: false,
    nicknameError: '',
    image: '/image/user.png',
    showAlert: false,
    changeSuccess: false,
    changeFail: false,
  };

  const [formState, setFormState] = useState<MyPage>(initialFormState);

  const handleBlurField = (
    fieldName: keyof MyPage,
    fieldValue: string,
    validator: ValidatorFunction,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [`${fieldName}Error` as keyof MyPage]: validator(fieldValue),
    }));
  };

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.get(`/api/check-nickname?nickname=${formState.nickname}`);
      const data = response.data;
      setFormState((prevState) => ({
        ...prevState,
        isNicknameAvailable: data.available,
        isSaveEnabled: true,
      }));
    } catch (error) {
      console.error('중복확인 실패:', error);
      setFormState((prevState) => ({
        ...prevState,
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
        isSaveEnabled: true,
      }));
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
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

  const handleSubmit = async (): Promise<void> => {
    try {
      // 프로필 이미지 변경 API 호출
      await axios.put('/api/update-profile-image', { image: userInfo.profileImage });
      setFormState((prevState) => ({
        ...prevState,
        isSaveEnabled: false,
        changeSuccess: true,
      }));
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        changeFail: true,
      }));
      console.error('프로필 이미지 변경에 실패했습니다:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>내 프로필</h2>
      <div className={styles.profileimage}>
        <div className={styles.profiletext}> 프로필 이미지(선택)</div>
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
      <div className={styles.inputcontainer}>
        <div className={styles.inputdetail}>
          <div className={styles.nicknameinput}>
            <TextField
              className={styles.input}
              labelText="닉네임"
              onChange={(e) =>
                setFormState((prevState) => ({ ...prevState, nickname: e.target.value }))
              }
              value={formState.nickname}
              hasError={!!formState.nicknameError}
              helpMessage={formState.nicknameError}
              onBlur={() =>
                handleBlurField('nickname', formState.nickname, formValidatorUtils.validateNickname)
              }
            />
          </div>
          <div>
            <Button
              className={styles.button}
              disabled={!formState.nickname}
              design="outline"
              text="중복 확인"
              onClick={handleCheckAvailability}
            />
          </div>
        </div>
        <div>
          <TextField className={styles.input} labelText="이메일" disabled />
        </div>
        <div className={styles.savebuttondetail}>
          <Button
            design="filled"
            disabled={!formState.isSaveEnabled}
            text="변경 사항 저장"
            onClick={handleSubmit}
          />
        </div>
      </div>
      {formState.changeFail && <Toast type="error" text="변경사항 저장에 실패하였습니다." />}
      {formState.changeSuccess && <Toast text="변경사항 저장에 성공하였습니다." />}
    </div>
  );
}
