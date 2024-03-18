import DetailInfo from './_components/DetailInfo';
import styles from './page.module.scss';
import Image from 'next/image';

type Props = {
  params: { policyId: string };
};

const policy = {
  policyId: '1',
  title: '청년 주택드림 청약통장',
  description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
  policyField: '주거분야',
  organization: '국토교통부',
  progress: '진행중',
  viewCount: 20,
  recommendCount: 14,
};

export default function PolicyDetailPage({ params }: Props) {
  const { title, description, policyField, progress, viewCount, recommendCount } = policy;

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.topButtonWrapper}>
        <p className={styles.topButton}>
          <Image src="/icons/share-2.svg" alt="공유 아이콘" width={30} height={30} />
        </p>
        <p className={styles.topButton}>
          <Image src="/icons/printer.svg" alt="인쇄 아이콘" width={30} height={30} />
        </p>
      </div>
      <div className={styles.keyInfo}>
        <div className={styles.topIconWrapper}>
          <p className={styles.countWrapper}>
            <p>조회수</p>
            <span>{viewCount}</span>
          </p>
          <p className={styles.countWrapper}>
            <p>추천수</p>
            <span>{recommendCount}</span>
          </p>
        </div>
        <div className={styles.categories}>
          <p className={styles.field}>{policyField}</p>
          <p className={styles.progress}>{progress}</p>
        </div>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <DetailInfo title="한 눈에 보는 정책 요약" />
      <DetailInfo title="신청 자격" />
      <DetailInfo title="신청 방법" />
      <DetailInfo title="기타" />
    </section>
  );
}
