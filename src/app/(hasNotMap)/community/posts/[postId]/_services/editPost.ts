export const editPost = async (body: FormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts/:postId`, {
    method: 'PATCH',
    body,
  });

  if (!response.ok) {
    throw new Error('Failed to edit post');
  }

  return response.json();
};
