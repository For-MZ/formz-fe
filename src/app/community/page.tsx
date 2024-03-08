'use client';

import styles from './page.module.scss';
import Banner from './_components/Banner';
import CategoryFilter from './_components/CategoryFilter';
import SearchBar from './_components/SearchBar';
import SortingFilter from './_components/SortingFilter';
import PostList from './_components/PostList';
import Pagination from '@/components/UI/Pagination';
import { useState } from 'react';

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSorting, setSelectedSorting] = useState('최신 순');

  const handleSelectCategory = (selected: string) => {
    setSelectedCategory(selected);
    console.log(selected);
  };

  const handleSelectSorting = (selected: string) => {
    setSelectedSorting(selected);
    console.log(selected);
  };

  return (
    <>
      <Banner />
      <div className={styles.filters}>
        <CategoryFilter onSelect={handleSelectCategory} />
        <SearchBar />
        <SortingFilter onSelect={handleSelectSorting} />
      </div>
      <PostList />
      <Pagination count={10} />
    </>
  );
}
