import { Reply } from '@/types/Reply';
import styles from './ReplyItem.module.scss';
import ReplyMutation from '../../ReplyMutation';
import { useState } from 'react';
import ReplyEditForm from '../../ReplyEditForm';
import Avatar from '@/components/UI/Avatar';

type Props = {
  reply: Reply;
};

export default function ReplyItem({ reply }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={styles.replyItem}>
      <Avatar imageUrl={reply.cmtWriter.profileImage} nickname={reply.cmtWriter.nickName} />
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
