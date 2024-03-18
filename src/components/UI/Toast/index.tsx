'use client';

import styles from './Toast.module.scss';
import { useState } from 'react';

type Props = {
  message: string;
  color?: 'blue' | 'green' | 'red' | 'yellow';
  onClose?: () => void;
};

export default function Toast({ message, color = 'blue', onClose, ...props }: Props): JSX.Element {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
    if (onClose) onClose();
  };

  return (
    <>
      {!closed && (
        <div {...props} className={`${styles.toast} ${styles[color]}`}>
          <div>{message}</div>
          <button className={styles.button} onClick={handleClose}>
            <img className={styles.logo} src="/icons/x.svg" />
          </button>
        </div>
      )}
    </>
  );
}
