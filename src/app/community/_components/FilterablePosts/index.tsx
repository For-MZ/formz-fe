'use client';

import styles from './FilterablePosts.module.scss';
import Pagination from '@/components/UI/Pagination';
import CategoryFilter from './CategoryFilter';
import PostList from '../PostList';
import SearchBar from './SearchFilter';
import SortingFilter from './SortingFilter';
import { useState } from 'react';
import { SimplePost } from '@/types/post';

type Props = {
  categories: string[];
  posts: SimplePost[];
};

export default function FilterablePosts({ categories, posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSorting, setSelectedSorting] = useState('최신순');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectCategory = (selectedCategory: string) => {
    alert('카테고리를 선택하였습니다.');
    setSelectedCategory(selectedCategory);
  };

  const handleSelectSorting = (selected: string) => {
    alert('댓글을 정렬 했습니다.');
    setSelectedSorting(selected);
    console.log(selected);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.filters}>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory} />
        <SearchBar />
        <SortingFilter selectedSorting={selectedSorting} onSelect={handleSelectSorting} />
      </div>
      <PostList posts={posts} selectedCategory={selectedCategory} selectedSorting={selectedSorting} />
      <Pagination totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
