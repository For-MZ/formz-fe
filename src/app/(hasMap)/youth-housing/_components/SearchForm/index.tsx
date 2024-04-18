import styles from './SearchForm.module.scss';
import TextField from '@/components/UI/TextField';
import SearchIcon from '/public/icons/search.svg';

export default function SearchForm() {
  return (
    <div className={styles.container}>
      <TextField LeftIcon={SearchIcon} />
    </div>
  );
}
