import axios from 'axios';

export const uploadImage = async (file: File): Promise<string | null> => {
  const maxSizeInBytes = 2 * 1024 * 1024; // 2MB

  if (file.size > maxSizeInBytes) {
    throw new Error('이미지 파일 크기는 2MB 이하여야 합니다.');
  }

  const formData = new FormData();
  formData.append('image', file);

  try {
    const imageRes = await axios.post('/api/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return imageRes.data.imageURL;
  } catch (error) {
    console.error('이미지 업로드 중 오류 발생:', error);
    return null;
  }
};
