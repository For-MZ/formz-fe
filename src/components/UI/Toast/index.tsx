'use client';

import styles from './Toast.module.scss';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  text: string;
  type?: 'default' | 'error';
  leftIcon?: StaticImageData;
  onClose?: () => void;
};

export default function Toast({ text, type = 'default', leftIcon, ...props }: Props): JSX.Element {
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
          {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
          <div>{text}</div>
          <button className={styles.button}></button>
        </div>
      )}
    </>
  );
}
