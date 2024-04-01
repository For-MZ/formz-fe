import { User } from './User';

export type Reply = {
  replyId: string;
  content: string;
  cmtWriter: User;
  uploadTime: string;
  lastModifiedDate?: string;
};
