'use client';

import styles from './Button.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  type: 'filled' | 'outline' | 'transparent';
  leftIcon?: StaticImageData;
  rightIcon?: StaticImageData;
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({ type, leftIcon, rightIcon, text, disabled = true, onClick }: Props) {
  return (
    <button
      className={`${styles.button} ${type === 'filled' ? styles.filled : type === 'outline' ? styles.outline : styles.transparent}`}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
      <span className={styles.text}>{text}</span>
      {rightIcon && <Image src={rightIcon} alt="아이콘" className={styles.icon} />}
    </button>
  );
}
