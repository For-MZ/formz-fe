export const likePost = async (postId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/posts/${postId}/like`,
    {
      method: 'PATCH',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to like comment');
  }

  return response.json();
};
