'use client';

import styles from './PostListPagination.module.scss';
import Pagination from '@/components/UI/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import useCurrentPageStore from '../../_store/currentPage';

// 클라이언트 컴포넌트 사용하기 위해서 분리
export default function PostListPagination() {
  const searParams = useSearchParams();
  const { currentPage, setCurrentPage } = useCurrentPageStore((state) => state);
  const router = useRouter();

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    // useSearchParams가 제공하는 searchParams는 readonly여서 new URLSearchParams 사용
    const newSearchParams = new URLSearchParams(searParams);
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
      <Pagination totalPages={10} currentPage={currentPage} onChangePage={handleChangePage} />
    </div>
  );
}
