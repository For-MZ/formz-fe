import { Reply } from '@/types/Reply';
import styles from './ReplyItem.module.scss';

type Props = {
  reply: Reply;
};

export default function ReplyItem({ reply }: Props) {
  return (
    <li className={styles.replyItem}>
      <img className={styles.avatar} src={reply.cmtWriter.profileImage} alt="" />
      <div className={styles.textZone}>
        <span className={styles.nickname}>{reply.cmtWriter.nickName}</span>
        <time className={styles.createdAt}>{reply.uploadTime}</time>
        <p className={styles.content}>{reply.content}</p>
      </div>
    </li>
  );
}
