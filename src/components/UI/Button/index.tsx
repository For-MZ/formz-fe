'use client';

import styles from './Button.module.scss';

type Props = {
  type: 'filled' | 'outline' | 'transparent';
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({ type, LeftIcon, RightIcon, text, disabled = true, onClick }: Props) {
  return (
    <button
      className={`${styles.button} ${type === 'filled' ? styles.filled : type === 'outline' ? styles.outline : styles.transparent}`}
      onClick={onClick}
      disabled={disabled}
    >
      {LeftIcon && <LeftIcon className={styles.icon} />}
      <span className={styles.text}>{text}</span>
      {RightIcon && <RightIcon className={styles.icon} />}
    </button>
  );
}
