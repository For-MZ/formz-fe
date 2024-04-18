'use client';

import styles from './CategoryFilter.module.scss';
import DropDown from '@/components/UI/DropDown';
import { useRouter, useSearchParams } from 'next/navigation';

const CATEGORY_OPTIONS = ['전체', '정책', '주택', '취업', '창업', '자유', '꿀팁'];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectCategory = (option: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', option);
    router.replace(`/community/posts/search?${newSearchParams.toString()}`);
  };

  return (
    <DropDown
      className={styles.dropdown}
      options={CATEGORY_OPTIONS}
      value={searchParams.get('category')}
      placeholder="카테고리 선택 (중복 선택 가능)"
      onSelect={selectCategory}
    />
  );
}
