'use client';

import { useRouter } from 'next/navigation';
import styles from './ActionButtons.module.scss';
import Button from '@/components/UI/Button';
import recommend from '/public/icons/thumbs-up.svg';

export default function ActionButtons() {
  const router = useRouter();
  return (
    <div className={styles.buttonWrapper}>
      <Button type="outline" text="신청하기" disabled={false} onClick={() => console.log('url 이동')} />
      <Button type="outline" text="목록으로" disabled={false} onClick={() => router.back()} />
      <Button type="outline" text="추천" disabled={false} onClick={() => console.log('클릭')} rightIcon={recommend} />
    </div>
  );
}
