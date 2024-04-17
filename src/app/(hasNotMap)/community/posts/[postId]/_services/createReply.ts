export const createReply = async (body: { commentId: string; content: string }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/replies`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to create reply');
  }

  return response.json();
};
