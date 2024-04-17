import styles from './SortingRadio.module.scss';

export default function SortingRadio() {
  return (
    <form className={styles.container}>
      <div>
        <input type="radio" id="latestOrder" name="drone" value="latestOrder" checked />
        <label htmlFor="latestOrder">최신순</label>
      </div>
      <div>
        <input type="radio" id="likeOrder" name="drone" value="likeOrder" />
        <label htmlFor="likeOrder">추천순</label>
      </div>
      <div>
        <input type="radio" id="hitOrder" name="drone" value="hitOrder" />
        <label htmlFor="hitOrder">조회순</label>
      </div>
      <div>
        <input type="radio" id="commentCountOrder" name="drone" value="commentCountOrder" />
        <label htmlFor="commentCountOrder">댓글순</label>
      </div>
    </form>
  );
}
