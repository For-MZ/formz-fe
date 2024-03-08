import styles from './PostList.module.scss';

import { SimplePost } from '@/types/post';
import PostItem from './PostItem';

const posts: SimplePost[] = [
  {
    postId: 1,
    title: '게시글 제목1',
    author: '강동욱',
    createdAt: '1시간전',
    views: 1000,
    likes: 5,
    commentCount: 5,
    category: '청년 정책',
  },
  {
    postId: 2,
    title: '게시글 제목2',
    author: '강동욱',
    createdAt: '1시간전',
    views: 1000,
    likes: 5,
    commentCount: 5,
    category: '청년 정책',
  },
  {
    postId: 3,
    title: '게시글 제목3',
    author: '강동욱',
    createdAt: '1시간전',
    views: 1000,
    likes: 5,
    commentCount: 5,
    category: '청년 정책',
  },
];

export default function PostList() {
  return (
    <section>
      <ul className={styles.container}>
        {posts.map((post) => (
          <li key={post.postId}>
            <PostItem {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
