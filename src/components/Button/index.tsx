'use client';

import styles from './Button.module.scss';

type Props = {
  type: 'filled' | 'outline' | 'transparent';
  // size:
  icon?: string;
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({ type, icon, text, disabled = true, onClick }: Props) {
  return (
    <button
      className={`${styles.button} ${type === 'filled' ? styles.filled : type === 'outline' ? styles.outline : styles.transparent}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
