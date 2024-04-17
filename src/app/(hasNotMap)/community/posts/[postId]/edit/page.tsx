'use client';

import { useQuery } from '@tanstack/react-query';
import PostForm from '../../_components/PostForm';
import { getPostDetail } from '../_services/getPostDetail';

type Props = {
  params: { postId: string };
};

export default function PostEditPage({ params: { postId } }: Props) {
  const { data } = useQuery({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
  });

  return (
    <>
      <PostForm data={data} />
    </>
  );
}
