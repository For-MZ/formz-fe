'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useToken from '@/hooks/useToken';

export default function google() {
  const router = useRouter();
  const { setToken, setRefreshToken } = useToken();

  useEffect(() => {
    const getCodeAndRequestToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        const REST_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        const SECRET_KEY = process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY;
        try {
          const response = await axios.post(
            `https://oauth2.googleapis.com/token`,
            `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&client_secret=${SECRET_KEY}&code=${code}`,
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              },
            },
          );

          console.log('액세스토큰', response.data.access_token);
          console.log('리프레시토큰', response.data.refresh_token);

          // 받은 액세스 토큰과 리프레시 토큰을 useToken 훅을 사용하여 저장
          setToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token);

          router.push('/');
        } catch (error) {
          console.error('Error occurred while requesting token:', error);
        }
      }
    };

    getCodeAndRequestToken();
  }, [setToken, setRefreshToken, router]);

  return (
    <div>
      <p>OAuth 처리 중...</p>
    </div>
  );
}
