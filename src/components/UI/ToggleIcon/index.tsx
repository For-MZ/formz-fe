'use client';

import styles from './ToggleIcon.module.scss';
import { useState } from 'react';

type Props = {
  isActive: boolean;
  icon: React.ReactNode;
  onClick: () => void;
  count?: number;
};

export default function ToggleIcon({ isActive, icon, onClick, count }: Props) {
  const [isOn, setIsOn] = useState(isActive);

  const handleClick = () => {
    setIsOn((prev) => !prev);
    onClick?.();
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.icon} ${isOn && styles.onIcon}`}
        onClick={handleClick}
      >
        {icon}
      </button>
      {count && <span className={styles.count}>{count}</span>}
    </div>
  );
}
