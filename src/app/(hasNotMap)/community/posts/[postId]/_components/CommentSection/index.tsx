'use client';

import styles from './CommentSection.module.scss';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../_services/getComments';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { Fragment, useEffect, useRef } from 'react';
import Loading from '@/components/UI/Loading';
import { PostDetail } from '@/types/Post';

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

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('댓글 불러오기 요청');
          fetchNextPage();
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null, // null이면 브라우저 뷰포트가 기본으로 설정
      rootMargin: '0px', // 루트(뷰포트)의 여백
      threshold: 0.1, // 관찰 타켓의 가시성 백분율을 나타내는 숫자
    });
    observer.observe(observerRef.current as Element);

    return () => {
      observer.unobserve(observerRef.current as Element);
    };
  }, []);

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
