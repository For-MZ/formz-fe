import styles from './PostList.module.scss';
import PostItem from './PostItem';
import { SimplePost } from '@/types/post';
import Link from 'next/link';

type Props = {
  posts: SimplePost[];
  selectedCategory: string;
  selectedSorting: string;
};

export default function PostList({ posts, selectedCategory, selectedSorting }: Props) {
  return (
    <section className={styles.container}>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.postId}>
            <Link href={`/community/posts/${post.postId}`}>
              <PostItem {...post} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
