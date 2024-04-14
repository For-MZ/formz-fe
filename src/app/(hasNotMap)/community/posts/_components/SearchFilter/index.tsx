'use client';

import styles from './SearchFilter.module.scss';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import SortingFilter from './SortingFilter';

export default function SearchFilter() {
  return (
    <>
      <SearchBar />
      <div className={styles.filters}>
        <CategoryFilter />
        <SortingFilter />
      </div>
    </>
  );
}
