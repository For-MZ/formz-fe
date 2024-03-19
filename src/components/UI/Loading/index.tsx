'use client';

import styles from './Loading.module.scss';
import FadeLoader from 'react-spinners/FadeLoader';

type Props = {
  loading: boolean;
};

export default function Loading({ loading }: Props) {
  return (
    loading && (
      <div className={styles.background}>
        <div className={styles.container}>
          <FadeLoader color="#21ca7b" />
        </div>
      </div>
    )
  );
}
