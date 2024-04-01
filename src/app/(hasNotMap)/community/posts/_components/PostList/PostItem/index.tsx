import styles from './PostItem.module.scss';
import { Post } from '@/types/Post';
import Category from './Category';
import ImageIcon from '/public/icons/image.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import HitsIcon from '/public/icons/eye.svg';
import CommentCountIcon from '/public/icons/message-square.svg';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { postId, title, categoryCode, uploadTime, writer, likeCnt, views, commentCnt, hasImage } = post;

  return (
    <li className={styles.container}>
      <Link href={`/community/posts/${postId}`}>
        <article className={styles.postItem}>
          <Category category={categoryCode} />
          <p className={styles.postTitle}>{title}</p>
          <div className={styles.postMetaData}>
            <div className={styles.leftZone}>
              <span>{writer.nickName}</span>
              <span>{uploadTime.toString()}</span>
            </div>
            <div className={styles.rightZone}>
              {hasImage && <ImageIcon />}
              <div className={styles.thumbsUp}>
                <ThumbsUpIcon />
                <span>{likeCnt}</span>
              </div>
              <div className={styles.hits}>
                <HitsIcon />
                <span>{views}</span>
              </div>
              <div className={styles.commentCount}>
                <CommentCountIcon />
                <span>{commentCnt}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
