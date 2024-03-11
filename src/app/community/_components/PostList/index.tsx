import styles from './PostList.module.scss';
import PostItem from './PostItem';
import { SimplePost } from '@/types/post';

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
            <PostItem {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
