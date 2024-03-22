import styles from './PlaceCard.module.scss';
import { SimplePlace } from '@/types/place';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  place: SimplePlace;
};

export default function PlaceCard({ place }: Props) {
  const { placeId, title, image, simpleLocation, fullLocation, cost, operation, viewCount, recommendCount } = place;

  return (
    <Link href={`/youth-place/${placeId}`}>
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
        <div className={styles.contentsWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={title} fill sizes="150px" />
            <p className={styles.simpleLocation}>{simpleLocation}</p>
          </div>
          <div className={styles.infoWrapper}>
            <strong className={styles.title}>{title}</strong>
            <p className={styles.fullLocation}>{fullLocation}</p>
            <p className={styles.operation}>{operation}</p>
            <p className={styles.cost}>{cost}</p>
          </div>
        </div>
      </section>
    </Link>
  );
}
