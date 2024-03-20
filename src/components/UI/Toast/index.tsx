'use client';

import styles from './Toast.module.scss';
import { useState, useEffect } from 'react';

type Props = {
  text: string;
  type?: 'default' | 'error';
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClose?: () => void;
};

export default function Toast({ text, type = 'default', LeftIcon, ...props }: Props): JSX.Element {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosed(true);
    }, 3000); // 3초 후에 토스트를 닫음

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 클리어
    };
  }, []); // 이펙트는 한 번만 실행됨

  return (
    <>
      {!closed && (
        <div {...props} className={`${styles.toast} ${styles[type]}`}>
          {LeftIcon && <LeftIcon className={styles.icon} />}
          <div>{text}</div>
          <button className={styles.button}></button>
        </div>
      )}
    </>
  );
}
