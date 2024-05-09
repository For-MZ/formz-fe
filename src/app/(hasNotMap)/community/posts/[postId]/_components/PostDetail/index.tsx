'use client';

import HitsIcon from '/public/icons/eye.svg';
import styles from './PostDetail.module.scss';
import { useQuery } from '@tanstack/react-query';
import Category from '../../../_components/PostList/PostItem/Category';
import { getPostDetail } from '../../_services/getPostDetail';
import MutationButtons from '../MutationButtons';
import ActionButtons from '../ActionButtons';
import Avatar from '@/components/UI/Avatar';
import Viewer from '../Viewer';

type Props = {
  postId: string;
};

export default function PostDetail({ postId }: Props) {
  const { data, error } = useQuery({
    queryKey: ['community', 'posts', postId],
    queryFn: getPostDetail,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  return (
    <section className={styles.container}>
      <div className={styles.firstRowContainer}>
        <Avatar
          size="lg"
          imageUrl={data?.writer.profileImage as string}
          nickname={data?.writer.nickName as string}
        />
        <div className={styles.textMetaDataContainer}>
          <div className={styles.author}>{data?.writer.nickName}</div>
          <div className={styles.postMetaDataContainer}>
            <time className={styles.createdAt}>{data?.createdDate}</time>
            <div className={styles.hitsBox}>
              <HitsIcon width="20" height="20" />
              <span>{data?.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <MutationButtons />
      </div>
      <div className={styles.secondRowContainer}>
        <Category category={data?.category} />
        <h1 className={styles.title}>{data?.title}</h1>
      </div>
      <div className={styles.thirdRowContainer}>
        <Viewer content={data?.content as string} />
      </div>
      <ActionButtons likeCount={data?.likeCnt as number} />
    </section>
  );
}
