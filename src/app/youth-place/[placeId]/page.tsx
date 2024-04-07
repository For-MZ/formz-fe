import styles from './page.module.scss';
import PlaceMainInfo from '../_components/PlaceMainInfo';

export default function PlaceDetailPage() {
  return (
    <section className={styles.pageContainer}>
      <PlaceMainInfo />
    </section>
  );
}
