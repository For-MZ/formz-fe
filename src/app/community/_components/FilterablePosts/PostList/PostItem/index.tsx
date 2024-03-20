import styles from './PostItem.module.scss';
import { PostItem as PostItemType } from '@/types/post';
import Category from '../../../Category';
import ImageIcon from '/public/icons/image.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import HitsIcon from '/public/icons/eye.svg';
import CommentCountIcon from '/public/icons/message-square.svg';

type Props = PostItemType;

export default function PostItem({ title, category, createdAt, author, likes, views, commentCount }: Props) {
  return (
    <article className={styles.postItem}>
      <Category category={category} />
      <p className={styles.postTitle}>{title}</p>
      <div className={styles.postMetaData}>
        <div className={styles.leftZone}>
          <span>{author}</span>
          <span>{createdAt.toString()}</span>
        </div>
        <div className={styles.rightZone}>
          {/* image 여부  */}
          {true && <ImageIcon />}
          <div className={styles.thumbsUp}>
            <ThumbsUpIcon />
            <span>{likes}</span>
          </div>
          <div className={styles.hits}>
            <HitsIcon />
            <span>{views}</span>
          </div>
          <div className={styles.commentCount}>
            <CommentCountIcon />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
