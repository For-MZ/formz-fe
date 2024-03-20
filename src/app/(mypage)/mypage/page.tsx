'use client';

import React, { useState, ChangeEvent } from 'react';
import styles from './mypage.module.scss';
import Image from 'next/image';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import axios from 'axios';
import Toast from '@/components/UI/Toast';
import Checkcircle from '/public/icons/checkcircle.svg';

export default function mypage() {
  const [nickname, setNickname] = useState<string>('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean>(false);
  const [isChangesSaved, setIsChangesSaved] = useState<boolean>(false);

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNickname(event.target.value);
    // 닉네임을 변경할 때마다 사용 가능한지 확인하도록 초기화
    setIsNicknameAvailable(false);
    setIsChangesSaved(false); // 닉네임이 변경되면 변경 사항 저장 상태를 false로 변경
  };

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.get(`/api/check-nickname?nickname=${nickname}`);
      const data = response.data;

      setIsNicknameAvailable(data.available); // 서버로부터 받은 데이터에 따라 상태 변경
    } catch (error) {
      console.error('중복확인 실패:', error);
      setIsNicknameAvailable(true);
    }
  };

  const handleSaveChanges = (): void => {
    // 변경 사항 저장 로직을 구현한다고 가정하고, 저장이 성공적으로 완료되면 아래 코드를 실행한다.
    setIsChangesSaved(true);
  };
  // 중복 확인 버튼의 활성화 여부를 닉네임 입력값의 유무에 따라 결정합니다.
  const isNicknameValid: boolean = nickname.trim() !== '';

  // 변경 사항 저장 버튼의 활성화 여부를 사용 가능한 닉네임 여부에 따라 결정합니다.
  const isSaveEnabled: boolean = isNicknameAvailable;

  return (
    <div className={styles.container}>
      <h2>내 프로필</h2>
      <Image className={styles.image} width={128} height={128} src="/image/user.png" />
      <div className={styles.inputcontainer}>
        <div>
          <TextField width="334px" labelText="닉네임" onChange={handleNicknameChange} />
        </div>
        <div style={{ marginTop: '26px', marginLeft: '8px' }}>
          <Button
            width="100px"
            disabled={!isNicknameValid || isChangesSaved} // 닉네임 입력값이 없을 때 비활성화됩니다.
            design="outline"
            text="중복 확인"
            onClick={handleCheckAvailability} // 중복 확인 버튼 클릭 시 실행되는 함수를 연결합니다.
          />
        </div>
      </div>
      <div>
        <TextField width="442px" labelText="이메일" disabled />
      </div>
      <div style={{ marginTop: '36px' }}>
        <Button
          design="filled"
          disabled={!isSaveEnabled || isChangesSaved} // 저장 버튼을 클릭하여 변경 사항을 저장하면 다시 비활성화됩니다.
          text="변경 사항 저장"
          onClick={handleSaveChanges}
        />
      </div>
      <div className={styles.toast}>
        {isChangesSaved && <Toast LeftIcon={Checkcircle} text="변경 사항을 저장했습니다." />}
      </div>
    </div>
  );
}
