import styles from './Pagination.module.scss';

type Props = {
  count: number;
};

export default function Pagination({ count = 10 }: Props) {
  const array = new Array(count).fill(undefined).map((_, index) => index + 1);

  return (
    <div className={styles.container}>
      <button>이전</button>
      {array.map((number) => (
        <button key={number}>{number}</button>
      ))}
      <button>다음</button>
    </div>
  );
}
