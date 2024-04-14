import React from 'react';
import styles from './LoginButton.module.scss';
import KakaoIcon from '/public/icons/kakaotalk.svg';
import GoogleIcon from '/public/icons/google.svg';

type ButtonType = 'default' | 'kakaoTalk' | 'google';
type ButtonInfo = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  text: string;
  handleLogin: () => void;
};
const buttonInfo: Record<ButtonType, ButtonInfo> = {
  default: { Icon: undefined, text: '로그인', handleLogin: () => {} },
  kakaoTalk: { Icon: KakaoIcon, text: '카카오로 로그인', handleLogin: () => {} },
  google: { Icon: GoogleIcon, text: '구글로 로그인', handleLogin: () => {} },
};

type Props = { type: ButtonType; handleLogin: () => void }; // 수정

export default function LoginButton({ type, handleLogin }: Props) {
  const { Icon, text } = buttonInfo[type]; // 수정
  return (
    <button className={`${styles.loginBtn} ${styles[type]}`} onClick={handleLogin}>
      {Icon && <Icon className={`${styles.icon} ${styles[type]}`} />}
      <span className={`${styles.text} ${styles[type]}`}>{text}</span>
    </button>
  );
}
