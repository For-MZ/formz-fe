import styles from './page.module.scss';
import PlaceMainInfo from '../_components/PlaceMainInfo';
import Gallery from '../_components/Gallery';
import PlaceDetailInfo from '../_components/PlaceDetailInfo';
import WayToGo from '../_components/WayToGo';

export default function PlaceDetailPage() {
  return (
    <section className={styles.pageContainer}>
      <PlaceMainInfo />
      <Gallery />
      <PlaceDetailInfo />
      <WayToGo />
    </section>
  );
}
