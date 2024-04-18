export const likeComment = async (commentId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/comments/${commentId}/like`,
    {
      method: 'PATCH',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to like comment');
  }

  return response.json();
};
