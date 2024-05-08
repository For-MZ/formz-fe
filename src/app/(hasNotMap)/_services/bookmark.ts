export const bookmark = async (page: string, id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${page}/${id}/bookmark`, {
    method: 'PATCH',
  });

  if (!response.ok) {
    throw new Error('북마크에 실패했습니다.');
  }

  return response.json();
};
