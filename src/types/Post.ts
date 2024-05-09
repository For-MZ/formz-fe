import { User } from './User';

export type Post = {
  postId: string;
  title: string;
  writer: User;
  category: Category;
  hasImage: boolean;
  views: number;
  likeCnt: number;
  commentCnt: number;
  createdDate: string;
  lastModifiedDate: string;
};

export type PostDetail = {
  title: string;
  content: string;
  writer: User;
  category: Category;
  bookmarked: boolean;
  liked: boolean;
  likeCnt: number;
  views: number;
  commentCnt: number;
  createdDate: string;
  lastModifiedDate: string;
};

export type Category = '정책' | '주택' | '취업' | '창업' | '자유' | '꿀팁';

export type Sorting = '최신순' | '추천순' | '조회순' | '댓글순';
