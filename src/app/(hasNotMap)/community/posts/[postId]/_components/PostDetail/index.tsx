'use client';

import HitsIcon from '/public/icons/eye.svg';
import { PostDetail } from '@/types/Post';
import styles from './PostDetail.module.scss';
import { useQuery } from '@tanstack/react-query';
import Category from '../../../_components/PostList/PostItem/Category';
import PostMutations from '../PostMutations';
import { getPostDetail } from '../../_lib/getPostDetail';
import { faker } from '@faker-js/faker';
import ActionButtons from '../ActionButtons';

type Props = {
  postId: string;
};

export default function PostDetail({ postId }: Props) {
  const { data, error } = useQuery<PostDetail, unknown, PostDetail, [_1: string, _2: string, _3: string]>({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
  const dummyData = {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(100),
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
    <>
      <div className={styles.headerBox}>
        <img
          className={styles.authorImage}
          src={dummyData?.writer.profileImage}
          alt={`${dummyData?.writer.nickName}의 프로필 이미지`}
        />
        <div className={styles.metaDataBox}>
          <div className={styles.author}>{dummyData?.writer.nickName}</div>
          <div className={styles.postMetaData}>
            <time className={styles.createdAt}>{dummyData?.createdAt}</time>
            <div className={styles.hitsBox}>
              <HitsIcon width="20" height="20" />
              <span>{dummyData?.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
        {/* TODO postMutationBox는 자신의 게시글일때만 보이게 처리 */}
        <PostMutations />
      </div>
      <div className={styles.titleBox}>
        <Category category={dummyData?.categoryName || ''} />
        <h1 className={styles.title}>{dummyData?.title}</h1>
      </div>
      <p className={styles.content}>{dummyData?.content}</p>
      <ActionButtons isLike={dummyData?.liked || false} isBookmark={dummyData?.bookmarked || false} />
    </>
  );
}
