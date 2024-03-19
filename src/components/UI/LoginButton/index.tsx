'use client';

import styles from './LoginButton.module.scss';
import KakaoIcon from '/public/icons/kakaotalk.svg';
import GoogleIcon from '/public/icons/google.svg';

type ButtonType = 'default' | 'kakaoTalk' | 'google';
type ButtonInfo = {
  Icon: undefined | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};
const buttonInfo: Record<ButtonType, ButtonInfo> = {
  default: { Icon: undefined, text: '로그인' },
  kakaoTalk: { Icon: KakaoIcon, text: '카카오로 로그인' },
  google: { Icon: GoogleIcon, text: '구글로 로그인' },
};

type Props = { type: ButtonType };

export default function LoginButton({ type }: Props) {
  const handleLogin = () => {};
  const { Icon, text } = buttonInfo[type];

  return (
    <button className={`${styles.loginBtn} ${styles[type]}`} onClick={handleLogin}>
      {Icon && <Icon className={`${styles.icon} ${styles[type]}`} />}
      <span className={`${styles.text} ${styles[type]}`}>{text}</span>
    </button>
  );
}
