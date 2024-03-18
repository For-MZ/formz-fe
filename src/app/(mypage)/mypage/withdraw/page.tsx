import React from 'react';
import styles from './withdraw.module.scss';
import Checkbox from '@/components/UI/CheckBox';
import Link from 'next/link';

export default function Withdraw() {
  return (
    <div className={styles.container}>
      <div className={styles.gap}>
        <h2>회원 탈퇴</h2>
        <div>
          <div>탈퇴 후 현재 아이디로 다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다.</div>
          <div>게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</div>
        </div>
        <div>
          <Checkbox label="안내 사항을 모두 확인하였으며, 이에 동의합니다." />
        </div>
        <div>
          <Link href="/mypage/settings">
            <button>취소</button>
          </Link>
          <Link href="/">
            <button>회원 탈퇴</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
