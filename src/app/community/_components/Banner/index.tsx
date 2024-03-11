import Link from 'next/link';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <section className={styles.container}>
      커뮤니티 배너
      <Link href={'/community/new'} className={styles.postNew}>
        글쓰기
      </Link>
    </section>
  );
}
