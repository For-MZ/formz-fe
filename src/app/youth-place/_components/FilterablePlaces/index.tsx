'use client';

import Pagination from '@/components/UI/Pagination';
import PlaceGrid from '../PlaceGrid';
import styles from './FilterablePlaces.module.scss';
import { useState } from 'react';

export default function FilterablePlaces() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <div className={styles.header}>
        <h2>
          청년 공간 검색 결과 <span>nnn</span>건
        </h2>
        <div className={styles.radioWrapper}>
          <label>
            <input type="radio" name="sort_place" value="조회순" />
            <button>조회순</button>
          </label>
          <label>
            <input type="radio" name="sort_place" value="추천순" />
            <button>추천순</button>
          </label>
          <label>
            <input type="radio" name="sort_place" value="가나다순" />
            <button>가나다순</button>
          </label>
        </div>
      </div>
      <PlaceGrid />
      <Pagination totalPages={10} currentPage={currentPage} onChangePage={handlePageChange} />
    </>
  );
}
