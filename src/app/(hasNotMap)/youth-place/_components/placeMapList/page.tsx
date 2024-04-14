import styles from './page.module.scss';
import Filter from '../Filter';
import ToggleButton from '../ToggleButton';
import MapToggleContainer from '@/app/(hasNotMap)/youth-place/_components/MapToggleContainer';

export default function MapListPage() {
  return (
    <section className={styles.pageContainer}>
      <h2>청년 공간</h2>
      <Filter />
      <ToggleButton defaultView="map" />
      <MapToggleContainer />
    </section>
  );
}
