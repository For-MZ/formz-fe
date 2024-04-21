'use client';

import styles from './FilterablePolicies.module.scss';
import { useState } from 'react';
import Pagination from '@/components/UI/Pagination';
import PolicyGrid from '../PolicyGrid';
import SearchResultHead from '../SearchResultHead';

export default function FilterablePolicies() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <SearchResultHead />
      <PolicyGrid />
      <Pagination totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
