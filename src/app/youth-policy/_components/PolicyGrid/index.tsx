import styles from './PolicyGrid.module.scss';
import { SimplePolicy } from '@/types/policy';
import PolicyGridCard from '../PolicyGridCard';

const policies: SimplePolicy[] = [
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '상시',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행 예정',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '신청 마감',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    policyId: '1',
    title: '청년 주택드림 청약통장',
    description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
    policyField: '주거분야',
    organization: '국토교통부',
    progress: '진행중',
    viewCount: 20,
    recommendCount: 14,
  },
];

export default function PolicyGrid() {
  return (
    <ul className={styles.gridContainer}>
      {policies &&
        policies.map((policy) => (
          <li key={policy.policyId}>
            <PolicyGridCard policy={policy} />
          </li>
        ))}
    </ul>
  );
}
