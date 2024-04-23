export const logout = async () => {
  try {
    const response = await fetch('/api/logout', {
      method: 'POST', // 로그아웃 요청은 POST 메서드로 보냅니다.
      credentials: 'include', // 쿠키를 포함하여 요청을 보냅니다.
    });

    if (response.ok) {
      // 로그아웃이 성공하면 클라이언트 측에서도 로컬 상태를 업데이트합니다.
      window.localStorage.clear();
      return true; // 성공적으로 로그아웃되었음을 알리는 값 반환
    } else {
      throw new Error('로그아웃에 실패했습니다.');
    }
  } catch (error) {
    console.error('로그아웃 오류:', error);
    return false; // 로그아웃에 실패했음을 알리는 값 반환
  }
};
