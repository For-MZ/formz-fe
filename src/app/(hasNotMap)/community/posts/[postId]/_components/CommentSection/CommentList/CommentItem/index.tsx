import Replys from '../../../Replys';
import ThumbsUpComment from '../../ThumbsUpComment';
import styles from './CommentItem.module.scss';
import { Comment } from '@/types/Comment';

type Props = {
  comment: Comment;
};

export default function CommentItem({ comment }: Props) {
  return (
    <li className={styles.commentItem}>
      <img
        className={styles.avatar}
        src={comment?.cmtWriter?.profileImage}
        alt={`${comment?.cmtWriter.nickName}님의 프로필 이미지`}
      />
      <div className={styles.textZone}>
        <div className={styles.textZoneHeader}>
          <span className={styles.nickname}>{comment.cmtWriter?.nickName}</span>
          <time className={styles.createdAt}>{comment.uploadTime}</time>
        </div>
        <p className={styles.textZoneBody}>{comment.content}</p>
        <div className={styles.textZoneFooter}>
          <ThumbsUpComment cmtLikeCnt={comment.cmtLikeCnt} />
          <Replys commentId={comment.commentId} cmtChildCnt={comment.cmtChildCnt} />
        </div>
      </div>
    </li>
  );
}
