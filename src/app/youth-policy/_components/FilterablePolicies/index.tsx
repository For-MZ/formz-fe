'use client';

import styles from './FilterablePolicies.module.scss';
import { useState } from 'react';
import Pagination from '@/components/UI/Pagination';
import Button from '@/components/UI/Button';
import PolicyGrid from '../PolicyGrid';

export default function FilterablePolicies() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <div className={styles.header}>
        <h2>
          청년 정책 검색 결과 <span>553</span>건
        </h2>
        <div className={styles.sortWrapper}>
          <div className={styles.radioWrapper}>
            <label>
              <input type="radio" name="sort_policy" value="조회순" />
              조회순
            </label>
            <label>
              <input type="radio" name="sort_policy" value="추천순" />
              추천순
            </label>
            <label>
              <input type="radio" name="sort_policy" value="가나다순" />
              가나다순
            </label>
            <label>
              <input type="radio" name="sort_policy" value="최신순" />
              최신순
            </label>
          </div>
          <Button text={'정렬'} type="filled" onClick={() => console.log('정렬!')} disabled={false} />
        </div>
      </div>
      <PolicyGrid />
      <Pagination totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
