import styles from './SearchFilter.module.scss';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';

export default function SearchFilter() {
  const [searchValue, handleChangeSearchValue] = useInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(searchValue);
    // TODO 검색 API 요청
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchFilter}>
      <TextField
        type="text"
        value={searchValue}
        onChange={handleChangeSearchValue}
        placeholder="검색어를 입력해주세요."
      />
    </form>
  );
}
