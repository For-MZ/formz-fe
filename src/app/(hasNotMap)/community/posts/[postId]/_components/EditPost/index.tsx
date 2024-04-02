'use client';

import Button from '@/components/UI/Button';
import styles from './EditPost.module.scss';
import { useParams, useRouter } from 'next/navigation';

export default function EditPost() {
  const { postId } = useParams();
  const router = useRouter();

  const handleClickEditButton = () => {
    router.push(`./${postId}/edit`);
  };

  return (
    <Button
      role="link"
      type="button"
      design="transparent"
      text="수정"
      className={styles.edit}
      onClick={handleClickEditButton}
    />
  );
}
