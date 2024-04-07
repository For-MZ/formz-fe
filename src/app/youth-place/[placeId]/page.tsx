import styles from './page.module.scss';
import PlaceMainInfo from '../_components/PlaceMainInfo';
import Gallery from '../_components/Gallery';

export default function PlaceDetailPage() {
  return (
    <section className={styles.pageContainer}>
      <PlaceMainInfo />
      <Gallery />
    </section>
  );
}
