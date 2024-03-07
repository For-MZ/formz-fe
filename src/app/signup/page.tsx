import React from 'react';
import TextFiled from '@/components/UI/TextFiled';
import styles from '@/app/signup/Signup.module.scss';
import Link from 'next/link';
import icon from '../../../public/icons/eye.png';

export default function Signup() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>회원가입</h2>
      <div>
        <div style={{ marginBottom: '8px' }}>이메일</div>
        <div className={styles.emailcontainer}>
          <div>
            <TextFiled width="350px" placeholder="ForMZ@example.com" />
          </div>
          <div>
            <button className={styles.test}>메일 인증</button>
          </div>
        </div>
      </div>
      <div className={styles.name}>
        <div style={{ marginBottom: '8px' }}>닉네임</div>
        <div className={styles.namecontainer}>
          <div>
            <TextFiled width="350px" />
          </div>
          <div>
            <button className={styles.test}>중복 확인</button>
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <div style={{ marginBottom: '8px' }}>비밀번호</div>
        <TextFiled rightIcon={icon} placeholder="영문 대소문자, 숫자, 특수 문자 포함 8자 이상" />
        <div style={{ marginBottom: '8px' }} className={styles.confirm}>
          비밀번호 확인
        </div>
        <TextFiled rightIcon={icon} placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요." />
      </div>
      <div>
        <div style={{ marginTop: '36px', marginBottom: '36px' }}>프로필 이미지 (선택)</div>
      </div>
      <div>
        <button style={{ width: '442px', height: '48px' }}>회원가입</button>
      </div>
      <div className={styles.login}>
        이미 계정이 있으신가요?
        <Link href="/login">
          <div className={styles.underline}>로그인</div>
        </Link>
      </div>
    </div>
  );
}
