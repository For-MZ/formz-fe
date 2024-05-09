'use client';

import ReplySection from '../../ReplySection';
import styles from './CommentItem.module.scss';
import { Comment } from '@/types/Comment';
import ToggleIcon from '@/components/UI/ToggleIcon';
import LikeIcon from '/public/icons/thumbs-up.svg';
import CommentMutation from '../../CommentMutation';
import { useState } from 'react';
import CommentEditForm from '../../CommentEditForm';
import { useMutation } from '@tanstack/react-query';
import { likeComment } from '../../../_services/likeComment';

type Props = {
  comment: Comment;
};

export default function CommentItem({ comment }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate: likeCommentMutate } = useMutation({
    mutationFn: () => likeComment(comment.commentId as string),
    onSuccess: () => {
      alert('댓글 추천 성공');
      // TODO 낙관적 업데이트 or getPostDetail invalidate
    },
    onError: () => {
      alert('댓글 추천 실패');
    },
  });

  return (
    <li className={styles.commentItem}>
      <div>
        <img
          className={styles.avatar}
          src={comment?.cmtWriter?.profileImage}
          alt={`${comment?.cmtWriter.nickName}님의 프로필 이미지`}
        />
      </div>
      {isEditing ? (
        <CommentEditForm
          commentId={comment.commentId}
          content={comment.content}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <div className={styles.textZone}>
            <div className={styles.textZoneHeader}>
              <span className={styles.nickname}>{comment.cmtWriter?.nickName}</span>
              <time className={styles.createdAt}>{comment.uploadTime}</time>
            </div>
            <div className={styles.textZoneBody}>
              <p>{comment.content}</p>
            </div>
            <div className={styles.textZoneFooter}>
              <ToggleIcon
                isActive={comment.cmtLiked}
                icon={<LikeIcon />}
                onClick={() => likeCommentMutate()}
                count={comment.cmtLikeCnt}
              />
              <ReplySection commentId={comment.commentId} cmtChildCnt={comment.cmtChildCnt} />
            </div>
          </div>
          <CommentMutation setIsEditing={setIsEditing} />
        </>
      )}
    </li>
  );
}
