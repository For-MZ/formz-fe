import styles from './MapToggleContainer.module.scss';
import MapContainer from '../MapContainer';
import ScrollablePlaces from '../ScrollablePlaces';
import SearchResultHead from '../SearchResultHead';

export default function MapToggleContainer() {
  return (
    <>
      <SearchResultHead />
      <section className={styles.wrapper}>
        <div className={styles.scrollablePlaces}>
          <ScrollablePlaces />
        </div>
        <div className={styles.mapContainer}>
          <MapContainer />
        </div>
      </section>
    </>
  );
}
