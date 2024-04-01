'use client';

import { useContext } from 'react';
import { FilterContext } from '../../_context/FilterProvider';
import PostList from '../PostList';
import { Post } from '@/types/Post';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../_lib/getPosts';

type Props = {
  searchParams: { word?: string; order?: string; category?: string };
};

export default function FilterablePosts({ searchParams }: Props) {
  const { category, sorting } = useContext(FilterContext);

  const { data } = useQuery<Post[], unknown, Post[], [_1: string, _2: string, Props['searchParams']]>({
    queryKey: ['community', 'posts', searchParams],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  const posts: Post[] = [
    {
      postId: '1',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: false,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '2',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: false,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '3',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: false,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '4',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '5',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '6',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '7',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '10',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '9',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
    {
      postId: '8',
      title: faker.lorem.sentence(),
      writer: { userId: '1', email: 'test@test.com', nickName: '강동욱', profileImage: faker.image.avatar() },
      hasImage: true,
      categoryCode: '정책',
      uploadTime: '1시간전',
      views: 1000,
      likeCnt: 5,
      commentCnt: 5,
    },
  ];

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
