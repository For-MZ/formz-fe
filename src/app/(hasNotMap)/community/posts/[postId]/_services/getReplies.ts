import { Reply } from '@/types/Reply';
import { QueryFunction } from '@tanstack/react-query';

export const getReplies: QueryFunction<
  Reply[],
  [_1: string, _2: string, _3: string, _4: string, _5: string]
> = async ({ queryKey }) => {
  const [_1, _2, _3, commentId] = queryKey;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/replies/${commentId}`,
    {
      next: {
        tags: ['community', 'posts', 'comments', commentId, 'replies'],
      },
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch replies');
  }

  return response.json();
};
