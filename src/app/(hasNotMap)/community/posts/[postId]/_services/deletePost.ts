export const deletePost = async (postId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts/${postId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete data');
  }

  return response.json();
};
