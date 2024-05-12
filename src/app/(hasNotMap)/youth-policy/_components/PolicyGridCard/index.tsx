'use client';

import styles from './PolicyGridCard.module.scss';
import { useRouter } from 'next/navigation';
import { ProgressType, SimplePolicy } from '@/types/policy';
import Image from 'next/image';
import SnsShare from '@/components/policy_place/SnsShare';

type Props = {
  policy: SimplePolicy;
};

export default function PolicyGridCard({ policy }: Props) {
  const router = useRouter();
  const {
    policyId,
    title,
    description,
    policyField,
    organization,
    progress,
    url,
    viewCount,
    recommendCount,
  } = policy;

  return (
    <section className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Image src="/icons/eye.svg" alt="추천 아이콘" width={12} height={12} />
            <span>{viewCount}</span>
          </div>
          <div className={styles.icon}>
            <Image src="/icons/thumbs-up.svg" alt="추천 아이콘" width={12} height={12} />
            <span>{recommendCount}</span>
          </div>
        </div>
        <SnsShare homePageUrl={url} />
      </div>
      <div className={styles.contents}>
        <p className={styles.title} onClick={() => router.push(`/youth-policy/${policyId}`)}>
          {title}
        </p>
        <p className={styles.description}>{description}</p>
        <p className={styles.organization}>{organization}</p>
      </div>
      <div className={styles.bottomArea}>
        <p className={`${styles.progress} ${getProgressStyle(progress)}`}>{progress}</p>
        <p className={styles.field}>{policyField}</p>
      </div>
    </section>
  );
}

const getProgressStyle = (progress: ProgressType) => {
  switch (progress) {
    case '진행중':
      return styles.inProgress;
    case '진행 예정':
      return styles.scheduled;
    case '상시':
      return styles.ongoing;
    case '홈페이지 확인':
      return styles.homepageCheck;
    default:
      return '';
  }
};
