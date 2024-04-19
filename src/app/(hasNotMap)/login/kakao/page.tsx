'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useToken from '@/hooks/useToken';

export default function kakao() {
  const router = useRouter();
  const { setToken, setRefreshToken } = useToken();
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    const getCodeAndRequestToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
        const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

        try {
          const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            body: `grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
          });

          if (!response.ok) {
            throw new Error('Failed to request token');
          }

          const data = await response.json();

          console.log('액세스토큰', data.access_token);
          console.log('리프레시토큰', data.refresh_token);

          // 받은 액세스 토큰과 리프레시 토큰을 useToken 훅을 사용하여 저장
          setToken(data.access_token);
          setRefreshToken(data.refresh_token);
          router.push('/');
        } catch (error) {
          console.error('Error occurred while requesting token:', error);
          setError('토큰 요청 중에 오류가 발생했습니다.');
        }
      }
    };

    getCodeAndRequestToken();
  }, [setToken, setRefreshToken, router]);

  return <div>{error && <p>{error}</p>}</div>;
}
