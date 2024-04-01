import styles from './PostList.module.scss';
import PostItem from './PostItem';
import { Post } from '@/types/Post';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <>
      {posts?.length === 0 ? (
        <p className={styles.noPostMessage}>커뮤니티 게시글이 없습니다.</p>
      ) : (
        <ul className={styles.postListContainer}>
          {posts.map((post) => (
            <PostItem post={post} key={post.postId} />
          ))}
        </ul>
      )}
    </>
  );
}
