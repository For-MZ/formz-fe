import Link from 'next/link';
import styles from './Footer.module.scss';
import Github from './../../../public/icons/github-circle.svg';
import Logo from './../../../public/icons/Logo_ForMZ.svg';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <Logo className={styles.logo} />
        <div className={styles.bottom}>
          <small className={styles.copyright}>©ForMZ Team. All rights reserved.</small>
          <ul className={styles.rightSection}>
            <li>
              <Link href={'/youth-policy'}>청년 정책</Link>
            </li>
            <li>
              <Link href={'/youth-place'}>청년 공간</Link>
            </li>
            <li>
              <Link href={'/youth-housing'}>청년 주택</Link>
            </li>
            <li>
              <Link href={'/community'}>커뮤니티</Link>
            </li>
            <li>
              <a href="https://github.com/For-MZ" target="_blank" rel="noreferrer">
                <Github className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
