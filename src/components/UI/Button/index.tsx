'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  fontSize?: string;
  design: 'filled' | 'outline' | 'transparent';
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text?: string;
  className?: string;
}

export default function Button({ design, LeftIcon, RightIcon, text, className, ...props }: Props) {
  return (
    // ! 인라인 스타일 삭제, 외부 Button 컴포넌트 사용하는 곳에서 className 지정해서 사용! (Alert, Confirm 컴포넌트 참고)
    <button
      className={`${styles.button} ${className} ${design === 'filled' ? styles.filled : design === 'outline' ? styles.outline : styles.transparent}`}
      {...props}
    >
      {LeftIcon && <LeftIcon className={styles.icon} />}
      {/* ! 외부 컴포넌트에서 텍스트 사이즈 지정하기 위해 span 태그 없앴습니다. */}
      {text}
      {RightIcon && <RightIcon className={styles.icon} />}
    </button>
  );
}
