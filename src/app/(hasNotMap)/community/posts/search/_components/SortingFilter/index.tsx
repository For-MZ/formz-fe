'use client';

import styles from './SortingFilter.module.scss';
import DropDown from '@/components/UI/DropDown';
import { useRouter, useSearchParams } from 'next/navigation';

const SORTING_OPTIONS = ['최신순', '추천순', '조회순', '댓글순'];

export default function SortingFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectSorting = (option: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('order', option);
    router.replace(`/community/posts/search?${newSearchParams.toString()}`);
  };

  return (
    <DropDown
      className={styles.dropdown}
      options={SORTING_OPTIONS}
      value={searchParams.get('order')}
      onSelect={selectSorting}
      placeholder="순서 선택"
    />
  );
}
