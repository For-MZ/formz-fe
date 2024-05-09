'use client';

import styles from './PostListPagination.module.scss';
import Pagination from '@/components/UI/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  totalItemCount: number;
};

export default function PostListPagination({ totalItemCount }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChangePage = (page: number) => {
    // useSearchParams가 제공하는 searchParams는 readonly
    // -> new URLSearchParams 사용
    const newSearchParams = new URLSearchParams(searchParams);
    if (page === 1) {
      newSearchParams.delete('page');
      router.push(`/community/posts?${newSearchParams.toString()}`);
      return;
    }
    newSearchParams.set('page', `${page}`);
    router.push(`/community/posts?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <Pagination
        totalItemCount={totalItemCount}
        currentPage={Number(searchParams.get('page')) || 1}
        onChangePage={handleChangePage}
      />
    </div>
  );
}
