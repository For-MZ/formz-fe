import styles from './page.module.scss';
import Filter from './_components/Filter';
import ToggleButton from './_components/ToggleButton';
import FilterablePlaces from './_components/FilterablePlaces';

export default function PlacePage() {
  return (
    <section className={styles.pageContainer}>
      <h3>청년 공간</h3>
      <Filter />
      <ToggleButton defaultView="card" />
      <FilterablePlaces />
    </section>
  );
}
