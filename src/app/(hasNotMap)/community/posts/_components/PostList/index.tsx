'use client';

import styles from './PostList.module.scss';
import PostItem from './PostItem';
import { Post } from '@/types/Post';
import { getPosts } from '../../_services/getPosts';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FilterContext } from '../../_context/FilterProvider';

export default function PostList() {
  const { category, sorting } = useContext(FilterContext);

  const { data: posts } = useQuery<Post[], unknown, Post[], [_1: string, _2: string]>({
    queryKey: ['community', 'posts'],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  // TODO getFilterPosts(category, sorting)

  if (posts?.length === 0) {
    return <p className={styles.noPostMessage}>커뮤니티 게시글이 없습니다.</p>;
  }

  return (
    <ul className={styles.container}>
      {posts?.map((post) => <PostItem post={post} key={post.postId} />)}
    </ul>
  );
}
