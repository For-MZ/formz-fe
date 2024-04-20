import styles from './page.module.scss';
import Filter from './_components/Filter';
import FilterablePolicies from './_components/FilterablePolicies';
import Banner from './_components/Banner';

export default function PolicyPage() {
  return (
    <section className={styles.pageWrapper}>
      <Banner />
      <Filter />
      <FilterablePolicies />
    </section>
  );
}
