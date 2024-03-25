'use client';

import { useState } from 'react';
import styles from './CommentList.module.scss';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import Button from '@/components/UI/Button';
import Replys from '../../Replys';
import { Comment } from '..';

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState<boolean>(false);

  return (
    <ul className={styles.commentsList}>
      {comments.map((comment, i) => (
        <li className={styles.commentsItem} key={i}>
          <img
            className={styles.commentUserProfileImage}
            src="/default-profile-image.png"
            alt="댓글 작성자 프로필 이미지"
          />
          <div className={styles.contentBox}>
            <div className={styles.contentBoxHeader}>
              <span className={styles.nickname}>{comment.email}</span>
              <time className={styles.createdAt}>{comment.createdAt}</time>
            </div>
            <p className={styles.contentBoxBody}>
              but the majority have suffered alteration in some form, by injected humour, or randomised words which
              don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
              free from repetition, injected humour, or non-characteristic words etc
            </p>
            <div className={styles.contentBoxFooter}>
              <div className={styles.buttons}>
                <div className={styles.thumbsUpBox}>
                  <ThumbsUpIcon width="20" height="20" />
                  <span>12</span>
                </div>
                <Button
                  design="transparent"
                  text="답글"
                  className={styles.replyFormOpenButton}
                  onClick={() => setIsVisibleReplyForm((prev) => !prev)}
                />
              </div>
              <Replys isVisibleReplyForm={isVisibleReplyForm} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
