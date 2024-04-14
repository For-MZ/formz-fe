'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface UserInfo {
  nickname: string;
  email: string;
  profileImage: string;
}

export function useUserInfo(): UserInfo {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: '',
    email: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get<UserInfo>('/api/user-info');
        const data = response.data;
        setUserInfo(data);
      } catch (error) {
        console.error('사용자 정보를 불러오는 데 실패했습니다:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return userInfo;
}
