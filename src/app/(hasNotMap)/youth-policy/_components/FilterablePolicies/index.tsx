'use client';

import styles from './FilterablePolicies.module.scss';
import { useState } from 'react';
import Pagination from '@/components/UI/Pagination';
import PolicyGrid from '../PolicyGrid';
import SearchResultHead from '../SearchResultHead';

export default function FilterablePolicies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('recent');
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const options = [
    { value: 'recent', labelText: '최신순' },
    {
      value: 'moreView',
      labelText: '조회순',
    },
    { value: 'recommended', labelText: '추천순' },
    { value: 'alphabetical', labelText: '가나다순' },
  ];

  const onChangeSortOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedOption(e.target.value);
  return (
    <>
      <SearchResultHead
        options={options}
        selectedOption={selectedOption}
        onChangeSortOption={onChangeSortOption}
      />
      <PolicyGrid selectedOption={selectedOption} />
      <Pagination totalItemCount={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
