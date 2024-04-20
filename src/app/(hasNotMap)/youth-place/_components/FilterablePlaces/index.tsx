'use client';

import Pagination from '@/components/UI/Pagination';
import PlaceGrid from '../PlaceGrid';
import styles from './FilterablePlaces.module.scss';
import { useState } from 'react';
import SearchResultHead from '@/app/(hasNotMap)/youth-place/_components/SearchResultHead';

export default function FilterablePlaces() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <SearchResultHead />
      <PlaceGrid />
      <Pagination totalPages={10} currentPage={currentPage} onChangePage={handlePageChange} />
    </>
  );
}
