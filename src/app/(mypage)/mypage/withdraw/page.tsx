'use client';

import React, { useState, ChangeEvent } from 'react';
import styles from './withdraw.module.scss';
import Checkbox from '@/components/UI/CheckBox';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import axios from 'axios';

export default function Withdraw() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [withdrawn, setWithdrawn] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
  };

  const handleWithdraw = async (): Promise<void> => {
    try {
      const response = await axios.post('/api/withdraw', {
        email: email, // 이메일 데이터 추가
        token: token, // 인증 토큰 데이터 추가
      });
      console.log(response.data);
      setWithdrawn(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.message || '회원 탈퇴에 실패했습니다.');
      setWithdrawn(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap}>
        <h2>회원 탈퇴</h2>
        <div>
          <div>탈퇴 후 현재 아이디로 다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다.</div>
          <div>게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</div>
        </div>
        <div>
          <Checkbox label="안내 사항을 모두 확인하였으며, 이에 동의합니다." onChange={handleCheckboxChange} />
        </div>
        <div className={styles.button}>
          <div style={{ marginRight: '8px' }}>
            <Link href="/mypage/settings">
              <Button design="outline" disabled={false} text="취소" />
            </Link>
          </div>
          <div>
            <Button design="filled" disabled={!isChecked} text="회원 탈퇴" onClick={handleWithdraw} />
          </div>
        </div>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
