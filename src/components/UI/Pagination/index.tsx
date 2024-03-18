import Image from 'next/image';
import styles from './Pagination.module.scss';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Pagination({ totalPages = 10, currentPage = 1, onPageChange }: Props) {
  const pageNumbers = Array(totalPages)
    .fill(undefined)
    .map((_, index) => index + 1);

  return (
    <div className={styles.container}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <Image src="/icons/chevron-left.svg" alt="이전 페이지 아이콘" width={16} height={16} />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? styles.activePage : ''}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <Image src="/icons/chevron-right.svg" alt="다음 페이지 아이콘" width={16} height={16} />
      </button>
    </div>
  );
}
