'use client';

import styles from './Toast.module.scss';
import { useState, useEffect } from 'react';
import Checkcircle from '/public/icons/checkcircle.svg';
import Alertcircle from '/public/icons/alertcircle.svg';

type Props = {
  text: string;
  type?: 'default' | 'error'; // type을 optional로 변경
  onClose?: () => void;
};

export default function Toast({ text, type = 'default', ...props }: Props): JSX.Element {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosed(true);
    }, 3000); // 3초 후에 토스트를 닫음

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 클리어
    };
  }, []); // 이펙트는 한 번만 실행됨

  // type에 따라서 적절한 아이콘 설정
  const Icon = type === 'default' ? Checkcircle : Alertcircle;

  return (
    <>
      {!closed && (
        <div {...props} className={`${styles.toast} ${styles[type]}`}>
          <Icon className={styles.icon} />
          <div>{text}</div>
          <button className={styles.button}></button>
        </div>
      )}
    </>
  );
}
