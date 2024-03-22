'use client';

import React, { useState } from 'react';
import styles from './settings.module.scss';
import TextField from '@/components/UI/TextField';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import Confirm from '@/components/UI/Confirm';
import eye from '/public/icons/eye.svg';

export default function Settings() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirm = () => {
    // 확인 버튼을 클릭할 때 실행되는 로직을 구현합니다.
    // 예를 들어, 데이터를 저장하거나 삭제하는 등의 작업을 수행할 수 있습니다.
    console.log('Confirmed');
    // Confirm 모달을 닫습니다.
    setShowConfirm(false);
  };

  const handleCancel = () => {
    // 취소 버튼을 클릭할 때 실행되는 로직을 구현합니다.
    // 예를 들어, Confirm 모달을 닫습니다.
    console.log('Cancelled');
    setShowConfirm(false);
  };

  return (
    <div className={styles.container}>
      <h2>계정 설정</h2>
      <div className={styles.inputcontainer}>
        <div className={styles.inputdetail}>
          <TextField type="password" disabled labelText="비밀번호" />
        </div>
        <div className={styles.buttondetail}>
          <Button onClick={() => setShowConfirm(true)} width="100px" text="변경" design="outline" disabled={false} />
        </div>
      </div>
      <Link href="/mypage/withdraw">
        <div className={styles.withdraw}>회원 탈퇴</div>
      </Link>
      <div>
        {/* Confirm 모달 */}
        {showConfirm && (
          <Confirm
            onConfirm={handleConfirm} // 확인 버튼을 클릭할 때 실행되는 함수
            onCancel={handleCancel} // 취소 버튼을 클릭할 때 실행되는 함수
            heading="비밀번호 변경" // 모달의 제목
            rightButtonText="변경" // 확인 버튼의 텍스트
          >
            <TextField RightIcon={eye} placeholder="현재 비밀번호를 입력해주세요." labelText="현재 비밀번호" />
            <div className={styles.password}>
              <TextField RightIcon={eye} placeholder="새 비밀번호를 입력해주세요." labelText="새 비밀번호" />
            </div>
            <div>
              <TextField
                RightIcon={eye}
                placeholder="새 비밀번호를 한 번 더 입력해주세요."
                labelText="새 비밀번호 확인"
              />
            </div>
          </Confirm>
        )}
      </div>
    </div>
  );
}
