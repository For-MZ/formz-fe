import styles from './MapToggleContainer.module.scss';
import ScrollablePlaces from '../ScrollablePlaces';
import SearchResultHead from '../SearchResultHead';
import Map from '@/components/Map';

export default function MapToggleContainer() {
  return (
    <>
      {/* <SearchResultHead /> */}
      <section className={styles.wrapper}>
        <div className={styles.scrollablePlaces}>
          <ScrollablePlaces />
        </div>
        <div className={styles.mapContainer}>
          <Map />
        </div>
      </section>
    </>
  );
}
