import styles from './page.module.scss';
import PlaceFilter from '../../../../components/policy_place/PlaceFilter';
import ToggleButton from '../../../../components/policy_place/ToggleButton';
import FilterablePlaces from '../_components/FilterablePlaces';
import Banner from '../_components/Banner';

export default function PlacePage() {
  return (
    <section className={styles.pageContainer}>
      <Banner />
      <PlaceFilter />
      <ToggleButton defaultView="card" />
      <FilterablePlaces />
    </section>
  );
}
