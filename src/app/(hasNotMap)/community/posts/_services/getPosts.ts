import { Post } from '@/types/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getPosts: QueryFunction<Post[], [_1: string, _2: string]> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts`, {
    next: {
      tags: ['community', 'posts'],
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
