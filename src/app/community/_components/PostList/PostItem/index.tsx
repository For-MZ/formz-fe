import Image from 'next/image';
import styles from './PostItem.module.scss';
import { SimplePost } from '@/types/post';

type Props = SimplePost;

export default function PostItem({ title, category, createdAt, author, likes, views, commentCount }: Props) {
  return (
    <article className={styles.postItem}>
      <span className={styles.category}>{category}</span>
      <p className={styles.postTitle}>{title}</p>
      <div className={styles.postMetaData}>
        <div className={styles.leftZone}>
          <span>{author}</span>
          <span>{createdAt.toString()}</span>
        </div>
        <div className={styles.rightZone}>
          <div className={styles.thumbsUp}>
            <Image src="/icons/thumbs-up.png" alt="추천 아이콘" width={16} height={16} />
            <span>{likes}</span>
          </div>
          <div className={styles.hits}>
            <Image src="/icons/eye.png" alt="조회 아이콘" width={16} height={16} />
            <span>{views}</span>
          </div>
          <div className={styles.commentCount}>
            <Image src="/icons/message-square.png" alt="댓글 수 아이콘" width={16} height={16} />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
