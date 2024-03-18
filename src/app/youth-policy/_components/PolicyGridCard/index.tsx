import styles from './PolicyGridCard.module.scss';
import { SimplePolicy } from '@/types/policy';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  policy: SimplePolicy;
};

export default function PolicyGridCard({ policy }: Props) {
  const { policyId, title, description, policyField, organization, progress, viewCount, recommendCount } = policy;
  return (
    <Link href={`/youth-policy/${policyId}`}>
      <section className={styles.container}>
        <div className={styles.topButtons}>
          <p className={styles.countWrapper}>
            <Image src="/icons/eye.svg" alt="조회 아이콘" width={18} height={18} />
            <span>{viewCount}</span>
          </p>
          <p className={styles.countWrapper}>
            <Image src="/icons/thumbs-up.svg" alt="추천 아이콘" width={18} height={18} />
            <span>{recommendCount}</span>
          </p>
          <p className={styles.shareIcon}>
            <Image src="/icons/share-2.svg" alt="공유 아이콘" width={20} height={20} />
          </p>
        </div>
        <div className={styles.contents}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <p className={styles.organization}>{organization}</p>
        <div className={styles.bottomCategories}>
          <p className={styles.progress}>{progress}</p>
          <p className={styles.field}>{policyField}</p>
        </div>
      </section>
    </Link>
  );
}
