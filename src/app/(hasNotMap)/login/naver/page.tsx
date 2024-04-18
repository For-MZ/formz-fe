'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useToken from '@/hooks/useToken';

export default function naver() {
  const router = useRouter();
  const { setToken, setRefreshToken } = useToken();

  useEffect(() => {
    const getCodeAndRequestToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        const NAVER_REST_API_KEY = process.env.NEXT_PUBLIC_NAVER_REST_API_KEY;
        const NAVER_REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
        const NAVER_SECRET_KEY = process.env.NEXT_PUBLIC_NAVER_SECRET_KEY;
        try {
          const response = await axios.post(
            `https://nid.naver.com/oauth2.0/token`,
            `grant_type=authorization_code&client_id=${NAVER_REST_API_KEY}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_SECRET_KEY}&code=${code}`,
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
