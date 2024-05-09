export const checkNicknameAvailability = async (nickname: string): Promise<boolean> => {
  try {
    const response = await fetch('/api/check-nickname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    });

    if (!response.ok) {
      throw new Error('닉네임 중복 확인 중 오류 발생');
    }

    const data = await response.json();
    return data.available;
  } catch (error) {
    console.error('닉네임 중복 확인 중 오류 발생:', error);
    return false;
  }
};
