'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function auth() {
  const router = useRouter();

  useEffect(() => {
    const getCodeAndRequestToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
        const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

        try {
          const response = await axios.post(
            `https://kauth.kakao.com/oauth/token`,
            `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              },
            },
          );

          console.log(response.data.access_token);

          router.push('/');
        } catch (error) {
          console.error('Error occurred while requesting token:', error);
        }
      }
    };

    getCodeAndRequestToken();
  }, []);

  return (
    <div>
      <p>OAuth 처리 중...</p>
    </div>
  );
}
