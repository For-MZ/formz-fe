'use client';

import { Post } from '@/types/Post';
import { getPosts } from '../../_services/getPosts';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FilterContext } from '../../_context/FilterProvider';
import PostList from '../PostList';

export default function PostListSection() {
  const { category, sorting } = useContext(FilterContext);

  const { data: posts } = useQuery<Post[], unknown, Post[], [_1: string, _2: string]>({
    queryKey: ['community', 'posts'],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  // TODO getFilterPosts(category, sorting)

  return <PostList posts={posts} />;
}
