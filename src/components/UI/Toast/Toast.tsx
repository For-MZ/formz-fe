'use client';

import React, { useState, useEffect } from 'react';
import styles from './Toast.module.scss';

type ToastProps = {
  message: string;
  duration?: number;
  backgroundColor?: string;
  color?: string;
};

export default function Toast({ message, duration = 1000, backgroundColor, color }: ToastProps): JSX.Element {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const toastStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
  };

  if (visible) {
    return (
      <div className={styles.toast} style={toastStyle}>
        {message}
      </div>
    );
  }

  return <></>; // 빈 Fragment를 반환합니다.
}
