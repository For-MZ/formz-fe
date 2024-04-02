'use client';

import styles from './SearchBar.module.scss';
import { useState } from 'react';
import TextField from '@/components/UI/TextField';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchIcon from '/public/icons/search.svg';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('word', searchValue);
      router.replace(`/community/posts?${newSearchParams.toString()}`);
    }
    console.log(searchValue);
    // TODO 검색 API 요청
  };

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchFilter}>
      <TextField
        LeftIcon={SearchIcon}
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChangeProp={handleChangeSearchValue}
        placeholder="검색어를 입력해주세요."
      />
    </form>
  );
}
