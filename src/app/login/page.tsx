import React from 'react';
import Divider from '@/components/UI/Divider';
import TextFiled from '@/components/UI/TextFiled';

export default function Login() {
  return (
    <div>
      <h2>로그인</h2>
      <div>
        <div>아이디(이메일)</div>
        <TextFiled />
        <div>비밀번호</div>
        <TextFiled />
        <div>비밀번호를 잊으셨나요?</div>
        <button>로그인</button>
        <Divider style="text" text="또는" />
        <div>
          <button>카카오로 로그인</button>
        </div>
        <div>
          <button>구글로 로그인</button>
        </div>
        <div>계정이 없으신가요? 회원가입</div>
      </div>
    </div>
  );
}
