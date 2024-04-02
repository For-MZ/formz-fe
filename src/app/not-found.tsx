'use client';

import styles from './NotFoundPage.module.scss';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>해당 페이지는 존재하지 않는 페이지입니다.</h2>
      <p className={styles.description}>Could not find requested resource.</p>
      <Button design="filled" text="홈으로 돌아가기" onClick={() => router.back()} />
    </div>
  );
}
