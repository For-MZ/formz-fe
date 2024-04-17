export const editReply = async (body: { replyId: string; content: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/replies/${body.replyId}`,
    {
      method: 'PATCH',
      body: body.content,
    },
  );

  if (!response.ok) {
    throw new Error('Failed to edit reply');
  }

  return response.json();
};
