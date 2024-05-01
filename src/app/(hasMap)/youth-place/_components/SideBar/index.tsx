import styles from './SideBar.module.scss';
import PlaceFilter from '@/components/policy_place/PlaceFilter';
import ToggleButton from '@/components/policy_place/ToggleButton';
import ScrollablePlaces from '@/app/(hasMap)/youth-place/_components/ScrollablePlaces';

export default function SideBar() {
  return (
    <section className={styles.container}>
      <ToggleButton defaultView="map" className={styles.toggleBtn} />
      <PlaceFilter />
      <ScrollablePlaces />
    </section>
  );
}
