import styles from './page.module.scss';
import Filter from './_components/Filter';

export default function PlacePage() {
  return (
    <section className={styles.pageContainer}>
      <h2>청년 공간</h2>
      <Filter />
    </section>
  );
}
