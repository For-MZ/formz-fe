import { Comment } from '@/types/Comment';
import { QueryFunction } from '@tanstack/react-query';

export const getComments: QueryFunction<Comment[], [_1: string, _2: string, _3: string, _4: string]> = async ({
  queryKey,
}) => {
  const [_1, _2, postId] = queryKey;

  const res = await fetch(`http://localhost:9090/api/posts/${postId}/comments`, {
    next: {
      tags: ['community', 'posts', postId, 'comments'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
