import styles from './SearchResultHead.module.scss';

export default function SearchResultHead() {
  return (
    <div className={styles.header}>
      <h5>
        검색 결과 <span>nnn</span>건
      </h5>
      <div className={styles.radioWrapper}>
        <label>
          <input type="radio" name="sort_place" value="조회순" defaultChecked />
          <button>조회순</button>
        </label>
        <label>
          <input type="radio" name="sort_place" value="추천순" />
          <button>추천순</button>
        </label>
        <label>
          <input type="radio" name="sort_place" value="가나다순" />
          <button>가나다순</button>
        </label>
      </div>
    </div>
  );
}
