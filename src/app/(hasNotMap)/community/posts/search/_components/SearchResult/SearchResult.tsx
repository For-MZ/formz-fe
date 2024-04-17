'use client';

import styles from './SearchResult.module.scss';
import { useQuery } from '@tanstack/react-query';
import PostList from '../../../_components/PostList';
import { Post } from '@/types/Post';
import { getPosts } from '../../../_services/getPosts';

type Props = {
  searchParams: { word: string; category?: string; order?: string };
};

export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<
    Post[],
    unknown,
    Post[],
    [_1: string, _2: string, _3: Props['searchParams']]
  >({
    queryKey: ['community', 'posts', searchParams],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  return (
    <section className={styles.container}>
      <div className={styles.searchResultCountContainer}>
        <p>검색 결과 몇 건</p>
      </div>
      <PostList posts={data} />
    </section>
  );
}
