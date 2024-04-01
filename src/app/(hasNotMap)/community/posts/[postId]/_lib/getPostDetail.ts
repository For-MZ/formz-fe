import { PostDetail } from '@/types/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getPostDetail: QueryFunction<PostDetail, [_1: string, _2: string, _3: string]> = async ({ queryKey }) => {
  const [_1, _2, postId] = queryKey;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts/${postId}`, {
    next: {
      tags: ['posts', postId],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
