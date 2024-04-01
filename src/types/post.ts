import { User } from './User';

export type Post = {
  postId: string;
  title: string;
  writer: User;
  categoryCode: string;
  uploadTime: string;
  hasImage: boolean;
  views: number;
  likeCnt: number;
  commentCnt: number;
};

export type PostDetail = {
  title: string;
  content: string;
  writer: User;
  categoryName: string;
  bookmarked: boolean;
  liked: boolean;
  likeCnt: number;
  views: number;
  commentCnt: number;
  createdAt: string;
};

export type Category = '전체' | '정책' | '주택' | '취업' | '창업' | '자유' | '꿀팁';

export type Sorting = '최신순' | '추천순' | '조회순' | '댓글순';
