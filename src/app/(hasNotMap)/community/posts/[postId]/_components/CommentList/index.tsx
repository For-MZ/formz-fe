import styles from './CommentList.module.scss';
import { Comment } from '@/types/Comment';
import CommentItem from './CommentItem';

type Props = {
  comments?: Comment[];
};

export default function CommentList({ comments }: Props) {
  return (
    <ul className={styles.commentList}>
      {comments?.map((comment) => <CommentItem comment={comment} key={comment.commentId} />)}
    </ul>
  );
}
