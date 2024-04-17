export const createComment = async (body: { userId: string; postId: string; content: string }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/comments`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }

  return response.json();
};
