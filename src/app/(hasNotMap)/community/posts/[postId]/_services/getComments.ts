import { Comment } from '@/types/Comment';
import { QueryFunction } from '@tanstack/react-query';

export const getComments: QueryFunction<
  Comment[],
  [_1: string, _2: string, _3: string, _4: string]
> = async ({ queryKey }) => {
  const [_1, _2, postId, _4] = queryKey;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/comments/${postId}`, {
    next: {
      tags: ['community', 'posts', postId, 'comments'],
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
