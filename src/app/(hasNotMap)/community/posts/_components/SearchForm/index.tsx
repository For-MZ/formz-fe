'use client';

import styles from './SearchForm.module.scss';
import TextField from '@/components/UI/TextField';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchIcon from '/public/icons/search.svg';
import useInput from '@/hooks/useInput';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, handleChange] = useInput(searchParams.get('word') || '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/community/posts/search?word=${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchFilter}>
      <TextField
        name="search"
        value={value}
        onChange={handleChange}
        LeftIcon={SearchIcon}
        className={styles.searchInput}
        type="search"
        placeholder="커뮤니티 검색 (검색 시 검색 필터 사용 가능)"
      />
    </form>
  );
}
