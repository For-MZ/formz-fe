'use client';

import Button from '@/components/UI/Button';
import styles from './DeletePost.module.scss';

export default function DeletePost() {
  const deletePost = () => {};

  return <Button design="transparent" text="삭제" className={styles.delete} onClick={deletePost} />;
}
