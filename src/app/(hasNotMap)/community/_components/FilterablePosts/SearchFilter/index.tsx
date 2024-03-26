'use client';

import styles from './SearchFilter.module.scss';
import { useState } from 'react';

import TextField from '@/components/UI/TextField';

export default function SearchFilter() {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(searchValue);
    // TODO 검색 API 요청
  };

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchFilter}>
      <TextField
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChangeProp={handleChangeSearchValue}
        placeholder="검색어를 입력해주세요."
      />
    </form>
  );
}
