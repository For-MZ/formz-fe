'use client';

import styles from './LoginButton.module.scss';
import Image from 'next/image';
import kakaoIcon from '/public/icons/kakaotalk.png';
import googleIcon from '/public/icons/google.png';

type ButtonType = 'default' | 'kakaoTalk' | 'google';
type ButtonInfo = {
  icon: string | StaticImageData;
  text: string;
};
const buttonInfo: Record<ButtonType, ButtonInfo> = {
  default: { icon: '', text: '로그인' },
  kakaoTalk: { icon: kakaoIcon, text: '카카오로 로그인' },
  google: { icon: googleIcon, text: '구글로 로그인' },
};

type Props = { type: ButtonType };

export default function LoginButton({ type }: Props) {
  const handleLogin = () => {};
  const { icon, text } = buttonInfo[type];

  return (
    <button className={`${styles.loginBtn} ${styles[type]}`} onClick={handleLogin}>
      {icon && <Image src={icon} alt={`${text} 아이콘`} className={`${styles.icon} ${styles[type]}`} />}
      <span className={`${styles.text} ${styles[type]}`}>{text}</span>
    </button>
  );
}
