'use client';

import { useContext } from 'react';
import styles from './SortingFilter.module.scss';
import DropDown from '@/components/UI/DropDown';
import { FilterContext } from '../../../_context/FilterProvider';
import { useRouter, useSearchParams } from 'next/navigation';

const SORTING_OPTIONS = ['최신순', '추천순', '조회순', '댓글순'];

export default function SortingFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setSorting } = useContext(FilterContext);

  const selectSorting = (option: string) => {
    setSorting(option);
    const newSearchParams = new URLSearchParams(searchParams);
    if (option === '최신순') {
      newSearchParams.delete('order');
      router.replace(`/community/posts?${newSearchParams.toString()}`);
      return;
    }
    newSearchParams.set('order', option);
    router.replace(`/community/posts?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.sorting}>
      <DropDown options={SORTING_OPTIONS} onSelectProp={selectSorting} />
    </div>
  );
}
