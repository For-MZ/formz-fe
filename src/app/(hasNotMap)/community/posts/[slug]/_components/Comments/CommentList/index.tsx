'use client';

import styles from './CommentList.module.scss';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import Replys from '../../Replys';
import { Comment } from '..';

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  return (
    <ul className={styles.commentList}>
      {comments.map((comment, i) => (
        <li className={styles.commentItem} key={i}>
          <img className={styles.avatar} src="/default-profile-image.png" alt="댓글 작성자 프로필 이미지" />
          <div className={styles.textZone}>
            <div className={styles.textZoneHeader}>
              <span className={styles.nickname}>{comment.email}</span>
              <time className={styles.createdAt}>{comment.createdAt}</time>
            </div>
            <p className={styles.textZoneBody}>
              but the majority have suffered alteration in some form, by injected humour, or randomised words which dont
              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
              isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc
            </p>
            <div className={styles.textZoneFooter}>
              <div className={styles.thumbsUpBox}>
                <ThumbsUpIcon width="20" height="20" />
                <span>12</span>
              </div>
              <Replys />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
