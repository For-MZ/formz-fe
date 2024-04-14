import { User } from './User';

export type Comment = {
  commentId: string;
  content: string;
  cmtWriter: User;
  cmtLiked: boolean;
  cmtLikeCnt: number;
  cmtChildCnt: number;
  uploadTime: string;
  lastModifiedDate?: string;
};
