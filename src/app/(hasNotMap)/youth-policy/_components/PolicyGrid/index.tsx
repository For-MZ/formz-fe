'use client';

import styles from './PolicyGrid.module.scss';
import PolicyGridCard from '../PolicyGridCard';
import { getSimplePolicy } from '../../_api/getPolicy';
import { SimplePolicy } from '@/types/policy';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/UI/Loading';

type Props = {
  selectedOption: string;
};

export default function PolicyGrid({ selectedOption }: Props) {
  const { isLoading, data: policies } = useQuery({
    queryKey: ['policies'],
    queryFn: () => getSimplePolicy(),
  });

  // const sortedPlaces = [...policies].sort((a, b) => {
  //   if (selectedOption === 'moreView') {
  //     return b.viewCount - a.viewCount;
  //   } else if (selectedOption === 'recommended') {
  //     return b.recommendCount - a.recommendCount;
  //   } else if (selectedOption === 'alphabetical') {
  //     return a.title.localeCompare(b.title);
  //   } else {
  //     // TODO 기본 최신순 정렬
  //     return b.viewCount - a.viewCount;
  //   }
  // });

  return (
    <>
      {isLoading && <Loading loading={isLoading} />}
      <ul className={styles.gridContainer}>
        {policies &&
          policies.length > 0 &&
          policies.map((policy: SimplePolicy) => (
            <li key={policy.policyId}>
              <PolicyGridCard policy={policy} />
            </li>
          ))}
      </ul>
    </>
  );
}
