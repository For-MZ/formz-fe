'use client';

import { useParams } from 'next/navigation';
import PostForm from '../../_components/PostForm';

export default function PostEditPage() {
  const { slug } = useParams();
  console.log(slug);

  // getPost(id);

  return (
    <>
      <PostForm />
    </>
  );
}
