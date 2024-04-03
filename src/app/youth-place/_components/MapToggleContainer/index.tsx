import MapContainer from '../MapContainer';
import ScrollablePlaces from '../ScrollablePlaces';
import styles from './MapToggleContainer.module.scss';

export default function MapToggleContainer() {
  return (
    <>
      <div className={styles.header}>
        <h2>
          청년 공간 검색 결과 <span>nnn</span>건
        </h2>
        <div className={styles.radioWrapper}>
          <label>
            <input type="radio" name="sort_place" value="조회순" />
            <button>조회순</button>
          </label>
          <label>
            <input type="radio" name="sort_place" value="추천순" />
            <button>추천순</button>
          </label>
          <label>
            <input type="radio" name="sort_place" value="가나다순" />
            <button>가나다순</button>
          </label>
        </div>
      </div>
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
