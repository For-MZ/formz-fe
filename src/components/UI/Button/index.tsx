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
}

export default function Button({
  width = '125px',
  height,
  fontSize,
  design,
  LeftIcon,
  RightIcon,
  text,
  ...props
}: Props) {
  return (
    <button
      style={{ minWidth: width, height, fontSize }}
      className={`${styles.button} ${design === 'filled' ? styles.filled : design === 'outline' ? styles.outline : styles.transparent}`}
      {...props}
    >
      {LeftIcon && <LeftIcon className={styles.icon} />}
      <span className={styles.text}>{text}</span>
      {RightIcon && <RightIcon className={styles.icon} />}
    </button>
  );
}
