'use client';

import Pagination from '@/components/UI/Pagination';
import PlaceGrid from '../PlaceGrid';
import styles from './FilterablePlaces.module.scss';
import { useState } from 'react';
import SearchResultHead from '@/app/(hasNotMap)/youth-place/_components/SearchResultHead';

export default function FilterablePlaces() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('moreView');
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const options = [
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
      <PlaceGrid selectedOption={selectedOption} />
      <Pagination totalItemCount={10} currentPage={currentPage} onChangePage={handlePageChange} />
    </>
  );
}
