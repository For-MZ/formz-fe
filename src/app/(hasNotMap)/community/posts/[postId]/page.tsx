import styles from './PostDetailPage.module.scss';
import PostDetail from './_components/PostDetail';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostDetail } from './_services/getPostDetail';
import { getComments } from './_services/getComments';
import CommentSection from './_components/CommentSection';
import { Comment } from '@/types/Comment';

type Props = {
  params: { postId: string };
};

export default async function PostDetailPage({ params: { postId } }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['community', 'posts', postId, 'comments'],
    queryFn: getComments,
    initialPageParam: 1,
    getNextPageParam: (lastPage: Comment[]) => parseInt(lastPage.at(-1)?.commentId as string),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className={styles.postDetail}>
      <HydrationBoundary state={dehydratedState}>
        <PostDetail postId={postId} />
        <CommentSection postId={postId} />
      </HydrationBoundary>
    </section>
  );
}
