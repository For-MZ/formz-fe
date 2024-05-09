'use client';

import SortRadio from '@/components/UI/SortRadio';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortingRadio() {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <SortRadio
      options={[
        { value: 'latest', labelText: '최신순' },
        { value: 'like', labelText: '추천순' },
        { value: 'hit', labelText: '조회순' },
        { value: 'commentCount', labelText: '댓글순' },
      ]}
      selectedOption={searchParams.get('order') || 'latest'}
      name="order"
      onChange={(event) => {
        const newSearchParams = new URLSearchParams(searchParams);
        if (event.target.value === 'latest') {
          newSearchParams.delete('order');
          router.push(`/community/posts?${newSearchParams.toString()}`);
          return;
        }
        newSearchParams.set('order', event.target.value);
        router.push(`/community/posts?${newSearchParams.toString()}`);
      }}
    />
  );
}
