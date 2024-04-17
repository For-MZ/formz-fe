import { Reply } from '@/types/Reply';
import ReplyItem from './ReplyItem';
import styles from './ReplyList.module.scss';

type Props = {
  replies?: Reply[];
};

export default function ReplyList({ replies }: Props) {
  return (
    <ul className={styles.replyList}>
      {replies?.map((reply) => <ReplyItem key={reply.replyId} reply={reply} />)}
    </ul>
  );
}
