import React from 'react';
import TextFiled from '@/components/UI/TextFiled';

export default function Signup() {
  return (
    <>
      <h2>회원가입</h2>
      <div>
        <div>이메일</div>
        <div>
          <TextFiled placeholder="ForMZ@example.com" /> <button>메일 인증</button>
        </div>
      </div>
      <div>
        <div>닉네임</div>
        <div>
          <TextFiled /> <button>중복 확인</button>
        </div>
      </div>
      <div>
        <div>비밀번호</div>
        <TextFiled placeholder="영문 대소문자, 숫자, 특수 문자 포함 8자 이상" />
        <div>비밀번호 확인</div>
        <TextFiled placeholder="공백을 제외한 한글, 영어, 숫자로만 입력해주세요." />
      </div>
      <div>
        <div>프로필 이미지 (선택)</div>
      </div>
      <div>
        <button>회원가입</button>
        <div>이미 계정이 있으신가요? 로그인</div>
      </div>
    </>
  );
}
