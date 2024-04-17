'use client';

import Image from 'next/image';
import styles from './Pagination.module.scss';

type Props = {
  totalPages: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
};

export default function Pagination({ totalPages = 10, currentPage = 1, onChangePage }: Props) {
  const pageNumbers = Array(totalPages)
    .fill(undefined)
    .map((_, index) => index + 1);

  return (
    <div className={styles.container}>
      {/* 이전 페이지 버튼 */}
      <button onClick={() => onChangePage(Number(currentPage) - 1)} disabled={currentPage === 1}>
        <Image src="/icons/chevron-left.svg" alt="이전 페이지 아이콘" width={16} height={16} />
      </button>
      {/* 1~totalPages 버튼 */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
          className={pageNumber === currentPage ? styles.activePage : ''}
        >
          {pageNumber}
        </button>
      ))}
      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => onChangePage(Number(currentPage) + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src="/icons/chevron-right.svg" alt="다음 페이지 아이콘" width={16} height={16} />
      </button>
    </div>
  );
}
