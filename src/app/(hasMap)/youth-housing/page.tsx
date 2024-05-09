import styles from './YouthHousingPage.module.scss';
import Map from '@/components/Map';
import SideBar from './_components/SideBar';

export default function YouthHousingPage() {
  return (
    <main className={styles.container}>
      <SideBar />
      <Map />
    </main>
  );
}
