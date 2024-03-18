import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <p>로고</p>
        <small className={styles.copyright}>©ForMZ Team. All rights reserved.</small>
      </div>
      <ul className={styles.rightSection}>
        <li>
          <Link href={'/youth-policy'}>청년 정책</Link>
        </li>
        <li>
          <Link href={'/youth-place'}>청년 공간</Link>
        </li>
        <li>
          <Link href={'/happy-Housing'}>행복 주택</Link>
        </li>
        <li>
          <Link href={'/community'}>커뮤니티</Link>
        </li>
        <li>
          <a href="https://github.com/For-MZ">아이콘</a>
        </li>
      </ul>
    </footer>
  );
}
