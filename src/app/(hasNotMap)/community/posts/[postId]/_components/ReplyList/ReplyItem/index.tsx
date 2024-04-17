import { Reply } from '@/types/Reply';
import styles from './ReplyItem.module.scss';
import ReplyMutation from '../../ReplyMutation';
import { useState } from 'react';
import ReplyEditForm from '../../ReplyEditForm';

type Props = {
  reply: Reply;
};

export default function ReplyItem({ reply }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={styles.replyItem}>
      <div>
        <img className={styles.avatar} src={reply.cmtWriter.profileImage} alt="" />
      </div>
      {isEditing ? (
        <ReplyEditForm
          replyId={reply.replyId}
          content={reply.content}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <div className={styles.textZone}>
            <span className={styles.nickname}>{reply.cmtWriter.nickName}</span>
            <time className={styles.createdAt}>{reply.uploadTime}</time>
            <p className={styles.content}>{reply.content}</p>
          </div>
          <ReplyMutation setIsEditing={setIsEditing} />
        </>
      )}
    </li>
  );
}
