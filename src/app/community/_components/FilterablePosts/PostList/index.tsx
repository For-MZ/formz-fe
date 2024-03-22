import styles from './PostList.module.scss';
import PostItem from './PostItem';
import { PostItem as PostItemType } from '@/types/post';
import Link from 'next/link';

type Props = {
  posts: PostItemType[];
  selectedCategory: string;
  selectedSorting: string;
};

export default function PostList({ posts, selectedCategory, selectedSorting }: Props) {
  return (
    <>
      {posts?.length === 0 ? (
        <p className={styles.noPostMessage}>커뮤니티 게시글이 없습니다.</p>
      ) : (
        <ul className={styles.postListContainer}>
          {posts.map((post) => (
            <li key={post.postId} className={styles.postItem}>
              <Link href={`/community/posts/${post.postId}`}>
                <PostItem {...post} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
