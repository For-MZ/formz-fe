import { SimplePost } from '@/types/post';
import Banner from './_components/Banner';
import FilterablePosts from './_components/FilterablePosts';

export default function CommunityPage() {
  // TODO 전체 게시글 데이터 요청
  // 서버에서 받아온 데이터라고 가정
  const posts: SimplePost[] = [
    {
      postId: '1',
      title: '게시글 제목1',
      author: '강동욱',
      createdAt: '1시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '정책',
    },
    {
      postId: '2',
      title: '게시글 제목2',
      author: '김희진',
      createdAt: '2시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '공간',
    },
    {
      postId: '3',
      title: '게시글 제목3',
      author: '강수정',
      createdAt: '3시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '주택',
    },
    {
      postId: '4',
      title: '게시글 제목4',
      author: '유성영',
      createdAt: '4시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '취업',
    },
    {
      postId: '5',
      title: '게시글 제목5',
      author: '박인서',
      createdAt: '5시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '창업',
    },
    {
      postId: '6',
      title: '게시글 제목6',
      author: '이규현',
      createdAt: '6시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '자유',
    },
    {
      postId: '7',
      title: '게시글 제목7',
      author: '이은지',
      createdAt: '7시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '꿀팁',
    },
    {
      postId: '8',
      title: '게시글 제목8',
      author: '강동욱',
      createdAt: '1시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '정책',
    },
    {
      postId: '9',
      title: '게시글 제목9',
      author: '강동욱',
      createdAt: '1시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '정책',
    },
    {
      postId: '10',
      title: '게시글 제목10',
      author: '강동욱',
      createdAt: '1시간전',
      views: 1000,
      likes: 5,
      commentCount: 5,
      category: '정책',
    },
  ];
  // TODO 게시글 데이터에서 카테고리 배열 만들기
  const categories: string[] = [...new Set(posts.map((post) => post.category))];
  console.log(categories);

  return (
    <>
      <Banner />
      <FilterablePosts categories={categories} posts={posts} />
    </>
  );
}
