import styles from './SideBar.module.scss';
import HousingList from '../HousingList';
import NavBar from '../NavBar';
import SearchForm from '../SearchForm';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contents}>
        <SearchForm />
        <HousingList />
      </div>
    </div>
  );
}
