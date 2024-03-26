'use client';

import styles from './FilterablePosts.module.scss';
import Pagination from '@/components/UI/Pagination';
import CategoryFilter from './CategoryFilter';
import PostList from './PostList';
import SearchFilter from './SearchFilter';
import SortingFilter from './SortingFilter';
import { useState } from 'react';
import { PostItem } from '@/types/post';

type Props = {
  posts: PostItem[];
};

export default function FilterablePosts({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedSorting, setSelectedSorting] = useState<string>('최신순');
  const [currentPage, setCurrentPage] = useState(1);

  const categories: string[] = ['전체', ...new Set(posts.map((post) => post.category))];

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
      <div className={styles.filters}>
        <CategoryFilter categories={categories} onSelect={handleSelectCategory} />
        <SearchFilter />
        <SortingFilter onSelect={handleSelectSorting} />
      </div>
      <PostList posts={posts} selectedCategory={selectedCategory} selectedSorting={selectedSorting} />
      <div className={styles.pagination}>
        <Pagination totalPages={10} currentPage={currentPage} onChangePage={handleChangePage} />
      </div>
    </section>
  );
}
