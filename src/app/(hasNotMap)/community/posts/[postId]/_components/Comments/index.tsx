'use client';

import styles from './Comments.module.scss';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { Comment } from '@/types/Comment';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../_lib/getComments';

type Props = {
  postId: string;
};

export default function Comments({ postId }: Props) {
  const { data } = useQuery<Comment[], unknown, Comment[], [_1: string, _2: string, _3: string, _4: string]>({
    queryKey: ['community', 'posts', postId, 'comments'],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    // enabled: !!post, // 게시글 없을때
  });
  const comments: Comment[] = [
    {
      commentId: '1',
      content: '댓글 1 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatarGitHub() },
      cmtLiked: false,
      cmtLikeCnt: 20,
      uploadTime: '1시간 전',
      cmtChildCnt: 0,
    },
    {
      commentId: '2',
      content: '댓글 2 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatarGitHub() },
      cmtLiked: true,
      cmtLikeCnt: 20,
      uploadTime: '1시간 전',
      cmtChildCnt: 1,
    },
    {
      commentId: '3',
      content: '댓글 3 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatarGitHub() },
      cmtLiked: false,
      cmtLikeCnt: 20,
      uploadTime: '1시간 전',
      cmtChildCnt: 2,
    },
    {
      commentId: '4',
      content: '댓글 4 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatarGitHub() },
      cmtLiked: false,
      cmtLikeCnt: 20,
      uploadTime: '1시간 전',
      cmtChildCnt: 3,
    },
    {
      commentId: '5',
      content: '댓글 5 내용',
      cmtWriter: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatarGitHub() },
      cmtLiked: true,
      cmtLikeCnt: 20,
      uploadTime: '1시간 전',
      cmtChildCnt: 4,
    },
  ];

  return (
    <div className={styles.comments}>
      <div className={styles.commentCount}>{`댓글 ${comments.length}개`}</div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
}
