'use client';

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      // react-query 전역 설정
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우 포커스 여부로 인한 refetch 설정
          retryOnMount: true, // 컴포넌트 마운트 여부로 인한 retry 설정
          refetchOnReconnect: false, // 인터넷 연결 여부로 인한 refetch 설정
          retry: false, // 데이터 요청 실패시 retry 설정
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
}

export default RQProvider;
