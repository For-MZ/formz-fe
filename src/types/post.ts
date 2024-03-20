export type PostItem = {
  postId: string;
  title: string;
  author: string;
  createdAt: string | Date;
  views: number;
  likes: number;
  commentCount: number;
  category: PostCategory;
};

export type PostCategory = '전체' | '정책' | '공간' | '주택' | '취업' | '창업' | '자유' | '꿀팁';
