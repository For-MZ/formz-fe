'use client';

import styles from './CommentSection.module.scss';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../_services/getComments';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

type Props = {
  postId: string;
};

export default function CommentSection({ postId }: Props) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(['community', 'posts', postId]);
  const { data: comments } = useQuery({
    queryKey: ['community', 'posts', postId, 'comments'],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!post,
  });

  return (
    <section className={styles.container}>
      <p className={styles.commentCount}>{`댓글 ${comments?.length as number}개`}</p>
      <CommentForm />
      <CommentList comments={comments} />
    </section>
  );
}
