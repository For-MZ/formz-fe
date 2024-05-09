'use client';

import { useRouter } from 'next/navigation';
import styles from './BottomButtons.module.scss';
import Button from '@/components/UI/Button';

export default function BottomButtons() {
  const router = useRouter();
  return (
    <div className={styles.buttonWrapper}>
      <Button
        design="filled"
        text="신청하기"
        disabled={false}
        onClick={() => console.log('url 이동')}
      />
      <Button
        design="outline"
        text="목록으로"
        disabled={false}
        onClick={() => router.push('/youth-policy')}
      />
    </div>
  );
}
