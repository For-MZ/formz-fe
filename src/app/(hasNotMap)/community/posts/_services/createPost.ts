export const createPost = async (body: FormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/posts`, {
    method: 'POST',
    body,
    next: {
      tags: ['community', 'posts'],
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to create data');
  }

  return response.json();
};
