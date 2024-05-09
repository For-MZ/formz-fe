'use client';

import styles from './CategoryTab.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

const CATEGORY_TABS = [
  {
    value: 'all',
    name: '전체',
  },
  {
    value: 'policy',
    name: '정책',
  },
  {
    value: 'housing',
    name: '주택',
  },
  {
    value: 'job',
    name: '취업',
  },
  {
    value: 'foundation',
    name: '창업',
  },
  {
    value: 'free',
    name: '자유',
  },
  {
    value: 'tip',
    name: '꿀팁',
  },
];

export default function CategoryTab() {
  const searchParams = useSearchParams();
  const categorySearchParams = searchParams.get('category') || 'all';
  const router = useRouter();

  const handleClickCategoryTab = (categoryValue: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (categoryValue === 'all') {
      newSearchParams.delete('page');
      newSearchParams.delete('category');
      router.replace(`/community/posts?${newSearchParams.toString()}`);
      return;
    }
    newSearchParams.delete('page');
    newSearchParams.set('category', categoryValue);
    router.push(`/community/posts?${newSearchParams.toString()}`);
  };

  return (
    <ul className={styles.container}>
      {CATEGORY_TABS.map((category) => (
        <li
          className={`${styles.category} ${categorySearchParams === category.value && styles.selected}`}
          key={category.value}
          onClick={() => handleClickCategoryTab(category.value)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
