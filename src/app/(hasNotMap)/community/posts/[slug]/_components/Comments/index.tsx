import styles from './Comments.module.scss';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export type Comment = {
  content: string;
  createdAt: string;
  email: string;
  uid: string;
};

export default function Comments() {
  const comments: Comment[] = [
    {
      content: '댓글 1 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '1',
    },
    {
      content: '댓글 2 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '2',
    },
    {
      content: '댓글 3 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '3',
    },
    {
      content: '댓글 4 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '4',
    },
    {
      content: '댓글 5 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '5',
    },
  ];

  return (
    <div className={styles.comments}>
      <div className={styles.commentCount}>댓글 5개</div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
}
