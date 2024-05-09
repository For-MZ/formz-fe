'use client';

import React, { useState } from 'react';
import styles from './community.module.scss';
import Pagination from '@/components/UI/Pagination';

export default function community() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div>
        <Pagination totalPages={10} currentPage={currentPage} onChangePage={handlePageChange} />
      </div>
    </div>
  );
}
