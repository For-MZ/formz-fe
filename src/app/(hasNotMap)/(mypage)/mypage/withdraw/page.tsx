'use client';

import React, { useState, ChangeEvent } from 'react';
import styles from './withdraw.module.scss';
import Checkbox from '@/components/UI/CheckBox';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import Toast from '@/components/UI/Toast';

type FormState = {
  email: string;
  token: string;
  isChecked: boolean;
  withdrawn: boolean;
  withdrawfail: boolean;
};

export default function Withdraw() {
  const initialFormState: FormState = {
    email: '',
    token: '',
    isChecked: false,
    withdrawn: false,
    withdrawfail: false,
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormState((prevState) => ({
      ...prevState,
      isChecked: event.target.checked,
    }));
  };

  const handleWithdraw = async (): Promise<void> => {
    setFormState((prevState) => ({
      ...prevState,
      withdrawfail: false,
      withdrawn: false,
    }));
    const { email, token } = formState; // formState에서 email과 token 가져오기
    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        body: JSON.stringify({
          email,
          token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Withdrawal failed');
      }
      // 응답 데이터를 추출합니다.
      const data = await response.json();
      console.log(data);
      setFormState((prevState) => ({
        ...prevState,
        withdrawn: true,
      }));
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        withdrawfail: true,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap}>
        <h2>회원 탈퇴</h2>
        <div>
          <div>
            탈퇴 후 현재 아이디로 다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다.
          </div>
          <div>게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</div>
        </div>

        <div>
          <Checkbox
            label="안내 사항을 모두 확인하였으며, 이에 동의합니다."
            onChange={handleCheckboxChange}
          />
        </div>
        <div className={styles.buttoncontainer}>
          <div className={styles.buttondetail}>
            <Link href="/mypage/settings">
              <Button design="outline" disabled={false} text="취소" />
            </Link>
          </div>
          <div>
            <Button
              design="filled"
              disabled={!formState.isChecked}
              text="회원 탈퇴"
              onClick={handleWithdraw}
            />
          </div>
        </div>
      </div>
      {formState.withdrawfail && <Toast type="error" text="회원 탈퇴에 실패하였습니다." />}
      {formState.withdrawn && <Toast text="회원 탈퇴에 성공하였습니다." />}
    </div>
  );
}
