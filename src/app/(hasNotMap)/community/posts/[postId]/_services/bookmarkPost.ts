export const bookmarkPost = async (postId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/posts/${postId}/bookmark`,
    {
      method: 'PATCH',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }

  return response.json();
};
