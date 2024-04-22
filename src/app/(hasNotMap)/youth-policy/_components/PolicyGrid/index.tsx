import styles from './PolicyGrid.module.scss';
import { SimplePolicy } from '@/types/policy';
import PolicyGridCard from '../PolicyGridCard';

const policies: SimplePolicy[] = [
  {
    policyId: '1',
    title: 'R청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 2,
    recommendCount: 14,
  },
  {
    policyId: '2',
    title: '12청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '상시',
    viewCount: 20,
    recommendCount: 1,
  },
  {
    policyId: '3',
    title: 'ㄱ청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행 예정',
    viewCount: 5,
    recommendCount: 111,
  },
  {
    policyId: '4',
    title: '중년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 10,
    recommendCount: 1123,
  },
  {
    policyId: '5',
    title: '청년 주택드림 청약통장12',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 0,
    recommendCount: 12,
  },
  {
    policyId: '6',
    title: '국민취업지원제도',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 5,
    recommendCount: 40,
  },
  {
    policyId: '7',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '신청 마감',
    viewCount: 26,
    recommendCount: 140,
  },
  {
    policyId: '8',
    title: '청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 30,
    recommendCount: 1,
  },
  {
    policyId: '9',
    title: '123124청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 9,
    recommendCount: 0,
  },
  {
    policyId: '10',
    title: '힛청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 5,
    recommendCount: 2,
  },
];

type Props = {
  selectedOption: string;
};

export default function PolicyGrid({ selectedOption }: Props) {
  const sortedPlaces = [...policies].sort((a, b) => {
    if (selectedOption === 'moreView') {
      return b.viewCount - a.viewCount;
    } else if (selectedOption === 'recommended') {
      return b.recommendCount - a.recommendCount;
    } else if (selectedOption === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else {
      // TODO 기본 최신순 정렬
      return b.viewCount - a.viewCount;
    }
  });
  return (
    <ul className={styles.gridContainer}>
      {policies &&
        sortedPlaces.map((policy) => (
          <li key={policy.policyId}>
            <PolicyGridCard policy={policy} />
          </li>
        ))}
    </ul>
  );
}
