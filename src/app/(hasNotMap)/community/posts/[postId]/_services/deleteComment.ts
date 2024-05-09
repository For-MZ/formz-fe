export const deleteComment = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/comments/:commentsId`,
    {
      method: 'DELETE',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }

  return response.json();
};
