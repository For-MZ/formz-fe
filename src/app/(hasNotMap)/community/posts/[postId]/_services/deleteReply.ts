export const deleteReply = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/replies/:replyId`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete reply');
  }

  return response.json();
};
