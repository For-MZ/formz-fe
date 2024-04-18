import PlaceMainInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceMainInfo';
import styles from './page.module.scss';
import Gallery from '@/app/(hasNotMap)/youth-place/_components/Gallery';
import PlaceDetailInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceDetailInfo';
import WayToGo from '@/app/(hasNotMap)/youth-place/_components/WayToGo';
import ButtonWrapper from '@/app/(hasNotMap)/youth-place/_components/ButtonWrapper';

export default function PlaceDetailPage() {
  return (
    <section className={styles.pageContainer}>
      <PlaceMainInfo />
      <Gallery />
      <PlaceDetailInfo />
      <WayToGo />
      <ButtonWrapper />
    </section>
  );
}