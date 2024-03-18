import styles from './page.module.scss';
import Filter from './_components/Filter';
import FilterablePolicies from './_components/FilterablePolicies';

export default function PolicyPage() {
  return (
    <section className={styles.pageWrapper}>
      <Filter />
      <FilterablePolicies />
    </section>
  );
}
