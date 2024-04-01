import styles from './PostDetailPage.module.scss';
import Comments from './_components/Comments';
import ActionButtons from './_components/ActionButtons';
import PostDetail from './_components/PostDetail';
import { PostDetail as PostDetailType } from '@/types/Post';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostDetail } from './_lib/getPostDetail';
import { getComments } from './_lib/getComments';

type Props = {
  params: { postId: string };
};

export default async function PostDetailPage({ params: { postId } }: Props) {
  // TODO getPostDetail(slug)
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
  });
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts', postId, 'comments'],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);
  const data: PostDetailType = {
    title: '게시글 제목',
    content: '게시글 내용',
    writer: {
      userId: '1',
      email: 'test@test.com',
      nickName: '강동욱',
      profileImage: '/default-profile-image.png',
    },
    categoryName: '정책',
    bookmarked: true,
    liked: true,
    likeCnt: 9999,
    views: 9999,
    commentCnt: 9999,
    createdAt: '2024년 4월 1일 오후 12시 30분',
  };

  return (
    <section className={styles.postDetail}>
      <HydrationBoundary state={dehydratedState}>
        <PostDetail postId={postId} />
        <Comments postId={postId} />
      </HydrationBoundary>
    </section>
  );
}
