import styles from './page.module.scss';
import Filter from '../../../../(hasNotMap)/youth-place/_components/Filter';
import ToggleButton from '../../../../(hasNotMap)/youth-place/_components/ToggleButton';
import MapToggleContainer from '@/app/(hasNotMap)/youth-place/_components/MapToggleContainer';

export default function MapListPage() {
  return (
    <section className={styles.pageContainer}>
      <Filter />
      <ToggleButton defaultView="map" />
      <MapToggleContainer />
    </section>
  );
}
