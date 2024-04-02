import { Reply } from '@/types/Reply';
import ReplyItem from './ReplyItem';
import styles from './ReplyList.module.scss';

type Props = {
  isVisibleReplyList: boolean;
  replys?: Reply[];
};

export default function ReplyList({ isVisibleReplyList, replys }: Props) {
  return (
    isVisibleReplyList && (
      <ul className={styles.replyList}>
        {replys?.map((reply) => <ReplyItem key={reply.replyId} reply={reply} />)}
      </ul>
    )
  );
}
