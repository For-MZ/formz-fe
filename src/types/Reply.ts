import { User } from './User';

export type Reply = {
  commentId: string;
  replyId: string;
  content: string;
  cmtWriter: User;
  uploadTime: string;
  lastModifiedDate?: string;
};
