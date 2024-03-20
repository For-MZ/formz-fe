import styles from './SearchFilter.module.scss';
import TextField from '@/components/UI/TextField';
import { useState } from 'react';

export default function SearchFilter() {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(searchValue);
    // TODO 검색 API 요청
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchFilter}>
      <TextField
        type="text"
        valueProp={searchValue}
        onChangeProp={setSearchValue}
        placeholder="검색어를 입력해주세요."
      />
    </form>
  );
}
