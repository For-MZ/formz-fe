import { Post } from '@/types/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getPosts: QueryFunction<
  {
    totalItemCount: number;
    data: Post[];
  },
  [_1: string, _2: string, _3: { word?: string; category?: string; page?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const newSearchParams = new URLSearchParams(searchParams);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/posts?${newSearchParams.toString()}`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
