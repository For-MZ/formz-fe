'use client';

import styles from './Pagination.module.scss';
import { useEffect, useState } from 'react';
import PrevIcon from '/public/icons/chevron-left.svg';
import NextIcon from '/public/icons/chevron-right.svg';

type Props = {
  totalItemCount: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
};

// 총 페이지 수를 기반으로 페이지 이차원 배열 생성
const getTotalPageArray = (totalPageCount: number) => {
  const totalPageArray = Array(totalPageCount)
    .fill(undefined)
    .map((_, i) => i + 1);

  return Array(Math.ceil(totalPageCount / 10))
    .fill(undefined)
    .map(() => totalPageArray.splice(0, 10));
};

export default function Pagination({ currentPage, totalItemCount, onChangePage }: Props) {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const totalPageCount = Math.ceil(Number(totalItemCount) / 10);
  const totalPageArray = getTotalPageArray(totalPageCount);

  // currentPage를 감시하면서 현재 페이지 배열 할당
  useEffect(() => {
    const currentPageIndex = Math.floor((currentPage - 1) / 10);
    setCurrentPageArray(totalPageArray[currentPageIndex]);
  }, [currentPage, totalItemCount]);

  const handleClickPageButton = (pageNumber: number) => {
    if (pageNumber < 1) {
      onChangePage?.(1);
      return;
    }
    if (pageNumber > totalPageCount) {
      onChangePage?.(totalPageCount);
      return;
    }
    onChangePage?.(pageNumber);
  };

  return (
    <div className={styles.container}>
      {/* 이전 페이지 버튼 */}
      {totalPageCount !== 1 && (
        <button
          onClick={() => handleClickPageButton(Number(currentPage) - 10)}
          disabled={currentPage === 1}
        >
          <PrevIcon />
        </button>
      )}
      {currentPageArray?.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClickPageButton(pageNumber)}
          className={pageNumber === currentPage ? styles.activePage : ''}
        >
          {pageNumber}
        </button>
      ))}
      {/* 다음 페이지 버튼 */}
      {totalPageCount !== 1 && (
        <button
          onClick={() => handleClickPageButton(Number(currentPage) + 10)}
          disabled={currentPage === totalPageCount}
        >
          <NextIcon />
        </button>
      )}
    </div>
  );
}
