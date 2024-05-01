import styles from './SideBar.module.scss';
import Filter from '@/app/(hasNotMap)/youth-place/_components/Filter';
import ToggleButton from '@/app/(hasNotMap)/youth-place/_components/ToggleButton';
import ScrollablePlaces from '@/app/(hasNotMap)/youth-place/_components/ScrollablePlaces';

export default function SideBar() {
  return (
    <section className={styles.container}>
      <ToggleButton defaultView="map" className={styles.toggleBtn} />
      <Filter />
      <ScrollablePlaces />
    </section>
  );
}
