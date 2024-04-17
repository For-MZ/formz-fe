'use client';

import { getPosts } from '../../_services/getPosts';
import { useQuery } from '@tanstack/react-query';
import PostList from '../PostList';

type Props = {
  searchParams: { category?: string; page?: string };
};

// 클라이언트 컴포넌트 사용하기 위해서 분리
export default function PostListSection({ searchParams }: Props) {
  const { data } = useQuery({
    queryKey: ['community', 'posts', searchParams],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return <PostList posts={data} />;
}
