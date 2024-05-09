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
  children?: React.ReactNode;
}

export default function Button({
  design,
  LeftIcon,
  RightIcon,
  text,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`${className} ${styles.button} ${design === 'filled' ? styles.filled : design === 'outline' ? styles.outline : styles.transparent}`}
      {...props}
    >
      {LeftIcon && <LeftIcon className={styles.icon} />}
      {text}
      {RightIcon && <RightIcon className={styles.icon} />}
      {children}
    </button>
  );
}
