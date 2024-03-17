export type SimplePost = {
  postId: string;
  title: string;
  author: string;
  createdAt: string | Date;
  views: number;
  likes: number;
  commentCount: number;
  category: string;
};
