import styles from './PlaceCard.module.scss';
import { useRouter } from 'next/navigation';
import { SimplePlace } from '@/types/place';
import Image from 'next/image';
import SnsShare from '@/components/policy_place/SnsShare';

type Props = {
  place: SimplePlace;
};

export default function PlaceCard({ place }: Props) {
  const router = useRouter();
  const {
    placeId,
    title,
    image,
    simpleLocation,
    fullLocation,
    cost,
    operation,
    viewCount,
    recommendCount,
  } = place;
  const homePage = 'https://www.naver.com'; //TODO

  return (
    <section className={styles.container} onClick={() => router.push(`/youth-place/${placeId}`)}>
      <div className={styles.contentsWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} fill />
          <p className={styles.simpleLocation}>{simpleLocation}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.operation}>{operation}</p>
          <SnsShare homePageUrl={homePage} />
          <p className={styles.title}>{title}</p>
          <p className={styles.fullLocation}>{fullLocation}</p>
          <p className={styles.cost}>{cost}</p>
        </div>
      </div>
      <div className={styles.interactiveButtons}>
        <p className={styles.countWrapper}>
          <Image src="/icons/eye.svg" alt="조회 아이콘" width={16} height={16} />
          <span>{viewCount}</span>
        </p>
        <p className={styles.countWrapper}>
          <Image src="/icons/thumbs-up.svg" alt="추천 아이콘" width={16} height={16} />
          <span>{recommendCount}</span>
        </p>
      </div>
    </section>
  );
}
