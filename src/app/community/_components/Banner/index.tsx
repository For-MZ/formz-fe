import Link from 'next/link';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      커뮤니티 배너
      <Link href="/community/posts/new" className={styles.postNew}>
        글 작성하러 가기
      </Link>
    </section>
  );
}
