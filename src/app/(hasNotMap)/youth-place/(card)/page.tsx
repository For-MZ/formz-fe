import styles from './page.module.scss';
import Filter from '../_components/Filter';
import ToggleButton from '../_components/ToggleButton';
import FilterablePlaces from '../_components/FilterablePlaces';
import Banner from '../_components/Banner';

export default function PlacePage() {
  return (
    <section className={styles.pageContainer}>
      <Banner />
      <Filter />
      <ToggleButton defaultView="card" />
      <FilterablePlaces />
    </section>
  );
}
