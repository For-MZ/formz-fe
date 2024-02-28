import styles from './page.module.scss';

export default function Page() {
  return (
    <div>
      <p className={styles.test}>module.scss 테스트</p>
      <ul>
        <li>테스트1</li>
        <li>테스트2</li>
        <li>테스트3</li>
        <li>테스트4</li>
      </ul>
    </div>
  );
}
