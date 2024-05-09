'use client';

import styles from './CommentSection.module.scss';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../_services/getComments';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { Fragment } from 'react';
import Loading from '@/components/UI/Loading';
import { PostDetail } from '@/types/Post';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type Props = {
  postId: string;
};

export default function CommentSection({ postId }: Props) {
  const queryClient = useQueryClient();
  const postDetailData = queryClient.getQueryData<PostDetail>(['community', 'posts', postId]);

  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ['community', 'posts', postId, 'comments'],
    queryFn: getComments,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => parseInt(lastPage.at(-1)?.commentId as string),
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!postDetailData,
  });

  const { observerRef } = useIntersectionObserver(fetchNextPage);

  return (
    <section className={styles.container}>
      <p
        className={styles.commentCount}
      >{`댓글 ${(postDetailData?.commentCnt as number) || '?'}개`}</p>
      <CommentForm />
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          <CommentList comments={page} />
        </Fragment>
      ))}
      <div ref={observerRef} style={{ height: '120px' }}>
        {isFetching && <Loading loading={isFetching} />}
      </div>
    </section>
  );
}
