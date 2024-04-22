import styles from './PolicyGridCard.module.scss';
import { SimplePolicy } from '@/types/policy';
import Link from 'next/link';
import ShareSvg from '/public/icons/share-2.svg';
import Image from 'next/image';

type Props = {
  policy: SimplePolicy;
};

export default function PolicyGridCard({ policy }: Props) {
  const {
    policyId,
    title,
    description,
    policyField,
    organization,
    progress,
    viewCount,
    recommendCount,
  } = policy;

  // TODO
  const onShare = () => console.log('공유 버튼 클릭! - 오픈 그래프 카드');

  return (
    <Link href={`/youth-policy/${policyId}`}>
      <section className={styles.container}>
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
        <button className={styles.shareButton} onClick={onShare}>
          <ShareSvg className={styles.icon} width="16" height="16" />
        </button>
        <div className={styles.contents}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.organization}>{organization}</p>
        </div>
        <div className={styles.bottomArea}>
          <p className={styles.progress}>{progress}</p>
          <p className={styles.field}>{policyField}</p>
        </div>
      </section>
    </Link>
  );
}
