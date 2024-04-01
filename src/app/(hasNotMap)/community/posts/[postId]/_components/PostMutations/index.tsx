'use client';

import Button from '@/components/UI/Button';
import styles from './PostMutations.module.scss';
import { useParams, useRouter } from 'next/navigation';

export default function PostMutations() {
  const { postId } = useParams();
  const router = useRouter();

  const handleUpdatePost = () => {
    router.push(`./${postId}/edit`);
  };

  const handleDeletePost = () => {};

  return (
    <div className={styles.postMutationBox}>
      <Button className={styles.edit} design="transparent" text="수정" onClick={handleUpdatePost} />
      <Button className={styles.delete} design="transparent" text="삭제" onClick={handleDeletePost} />
    </div>
  );
}
