'use client';

import styles from './FilterablePosts.module.scss';
import Pagination from '@/components/UI/Pagination';
import CategoryFilter from './CategoryFilter';
import PostList from './PostList';
import SearchFilter from './SearchFilter';
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

  const handleSelectCategory = (selected: string) => {
    setSelectedCategory(selected);
    // TODO 게시글 리스트 동기화
  };

  const handleSelectSorting = (selected: string) => {
    setSelectedSorting(selected);
    // TODO 게시글 리스트 동기화
  };

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // TODO 게시글 리스트 동기화
  };

  return (
    <section className={styles.filterablePosts}>
      <SearchFilter />
      <div className={styles.filters}>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory} />
        {posts?.length > 0 && <SortingFilter selectedSorting={selectedSorting} onSelect={handleSelectSorting} />}
      </div>
      <PostList posts={posts} selectedCategory={selectedCategory} selectedSorting={selectedSorting} />
      {posts?.length > 0 && (
        <div className={styles.pagination}>
          <Pagination totalPages={10} currentPage={currentPage} onChangePage={handleChangePage} />
        </div>
      )}
    </section>
  );
}
