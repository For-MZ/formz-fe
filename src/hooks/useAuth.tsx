'use client';

import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 여부를 확인하고 isLoggedIn 상태 업데이트
    const checkAuth = () => {
      const userLoggedIn = localStorage.getItem('isLogin');
      setIsLoggedIn(userLoggedIn === 'true');
    };

    checkAuth(); // 페이지가 로드될 때 한 번 실행

    // 로컬 스토리지의 로그인 여부 변경 감지
    window.addEventListener('storage', checkAuth);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return isLoggedIn;
};

export default useAuth;
