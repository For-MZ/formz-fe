export const editComment = async (body: { commentId: string; content: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/comments/${body.commentId}`,
    {
      method: 'PATCH',
      body: body.content,
    },
  );

  if (!response.ok) {
    throw new Error('Failed to edit comment');
  }

  return response.json();
};
