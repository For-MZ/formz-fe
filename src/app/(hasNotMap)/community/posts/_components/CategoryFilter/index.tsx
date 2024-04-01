'use client';

import { useContext } from 'react';
import styles from './CategoryFilter.module.scss';
import DropDown from '@/components/UI/DropDown';
import { FilterContext } from '../../_context/FilterProvider';
import { useRouter, useSearchParams } from 'next/navigation';

const CATEGORY_OPTIONS = ['전체', '정책', '주택', '취업', '창업', '자유', '꿀팁'];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { setCategory } = useContext(FilterContext);

  const selectCategory = (option: string) => {
    setCategory(option);
    const newSearchParams = new URLSearchParams(searchParams);
    if (option === '전체') {
      newSearchParams.delete('category');
      router.replace(`/community/posts?${newSearchParams.toString()}`);
      return;
    }
    newSearchParams.set('category', option);
    router.replace(`/community/posts?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <DropDown options={CATEGORY_OPTIONS} onSelectProp={selectCategory} />
    </div>
  );
}
