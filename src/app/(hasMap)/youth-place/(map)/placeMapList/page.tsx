import styles from './page.module.scss';
import SideBar from '../../_components/SideBar';
import Map from '@/components/Map';

export default function PlaceMapPage() {
  return (
    <main className={styles.pageContainer}>
      <SideBar />
      <Map />
    </main>
  );
}
