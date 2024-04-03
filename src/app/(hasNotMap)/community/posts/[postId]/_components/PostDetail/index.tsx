'use client';

import HitsIcon from '/public/icons/eye.svg';
import { PostDetail } from '@/types/Post';
import styles from './PostDetail.module.scss';
import { useQuery } from '@tanstack/react-query';
import Category from '../../../_components/PostList/PostItem/Category';
import { getPostDetail } from '../../_services/getPostDetail';
import CopyURLPost from '../CopyPostUrl';
import BookmarkPost from '../BookmarkPost';
import LikePost from '../LikePost';
import UpdatePost from '../EditPost';
import DeletePost from '../DeletePost';

type Props = {
  postId: string;
};

export default function PostDetail({ postId }: Props) {
  const { data, error } = useQuery<
    PostDetail,
    unknown,
    PostDetail,
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  return (
    <section className={styles.container}>
      <div className={styles.metaDataContainer}>
        <img
          className={styles.authorImage}
          src={data?.writer.profileImage}
          alt={`${data?.writer.nickName}님의 프로필 이미지`}
        />
        <div className={styles.textMetaDataContainer}>
          <div className={styles.author}>{data?.writer.nickName}</div>
          <div className={styles.postMetaDataContainer}>
            <time className={styles.createdAt}>{data?.createdAt}</time>
            <div className={styles.hitsBox}>
              <HitsIcon width="20" height="20" />
              <span>{data?.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className={styles.mutationButtons}>
          <UpdatePost />
          <DeletePost />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <Category category={data?.category} />
        <h1 className={styles.title}>{data?.title}</h1>
      </div>
      <div>
        <p className={styles.content}>{data?.content}</p>
      </div>
      <div className={styles.buttonContainer}>
        <CopyURLPost />
        <BookmarkPost isBookmark={data?.bookmarked} />
        <LikePost isLike={data?.liked} likeCnt={data?.likeCnt} />
      </div>
    </section>
  );
}
