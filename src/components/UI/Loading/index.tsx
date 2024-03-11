'use client';

import styles from './Loading.module.scss';
import Image from 'next/image';

type Props = {
  loading: boolean;
};

export default function Loading({ loading }: Props) {
  return (
    loading && (
      <div className={styles.background}>
        <div className={styles.container}>
          <p className={styles.text}>잠시만 기다려주세요..</p>
          <Image src="/loading.gif" alt="로딩중" className={styles.image} width={100} height={100} />
        </div>
      </div>
    )
  );
}
