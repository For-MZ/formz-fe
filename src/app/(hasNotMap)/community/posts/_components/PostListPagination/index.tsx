'use client';

import styles from './PostListPagination.module.scss';
import Pagination from '@/components/UI/Pagination';
import { useState } from 'react';

export default function PostListPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // TODO 게시글 리스트 동기화
  };

  return (
    <div className={styles.container}>
      <Pagination totalPages={10} currentPage={currentPage} onChangePage={handleChangePage} />
    </div>
  );
}
