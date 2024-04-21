import styles from './SearchResultHead.module.scss';

export default function SearchResultHead() {
  return (
    <div className={styles.header}>
      <h5>
        검색 결과 <span>nnn</span>건
      </h5>
      <div className={styles.radioWrapper}>
        <label>
          <input type="radio" name="sort_policy" value="조회순" defaultChecked />
          조회순
        </label>
        <label>
          <input type="radio" name="sort_policy" value="추천순" />
          추천순
        </label>
        <label>
          <input type="radio" name="sort_policy" value="가나다순" />
          가나다순
        </label>
        <label>
          <input type="radio" name="sort_policy" value="최신순" />
          최신순
        </label>
      </div>
    </div>
  );
}
