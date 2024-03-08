import styles from './PostItem.module.scss';
import { SimplePost } from '@/types/post';

type Props = SimplePost;

export default function PostItem({ title, category, createdAt, author, likes, views, commentCount }: Props) {
  return (
    <article className={styles.postItem}>
      <span className={styles.category}>{category}</span>
      <p className={styles.postTitle}>{title}</p>
      <div className={styles.postMetaData}>
        <div className={styles.left}>
          <span>{author}</span>
          <span>{createdAt.toString()}</span>
        </div>
        <div className={styles.right}>
          👍<span>{likes}</span>
          👁️<span>{views}</span>
          💬<span>{commentCount}</span>
        </div>
      </div>
    </article>
  );
}
