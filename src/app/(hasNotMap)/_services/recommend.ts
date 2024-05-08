export const recommend = async (page: string, id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${page}/${id}/recommend`, {
    method: 'PATCH',
  });

  if (!response.ok) {
    throw new Error('추천에 실패했습니다.');
  }

  return response.json();
};
