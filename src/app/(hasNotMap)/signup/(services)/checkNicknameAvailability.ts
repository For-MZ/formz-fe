import axios from 'axios';

export const checkNicknameAvailability = async (nickname: string): Promise<boolean> => {
  try {
    const response = await axios.post('/api/check-nickname', { nickname });
    return response.data.available;
  } catch (error) {
    console.error('닉네임 중복 확인 중 오류 발생:', error);
    return false;
  }
};
