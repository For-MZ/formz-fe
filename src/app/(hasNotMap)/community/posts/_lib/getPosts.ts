import { Post } from '@/types/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getPosts: QueryFunction<
  Post[],
  [_1: string, _2: string, searchParams: { word?: string; order?: string; category?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  console.log(searchParams.toString());

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts?${searchParams.toString()}`, {
    next: {
      tags: ['community', 'posts'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
