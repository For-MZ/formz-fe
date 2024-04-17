'use client';

import Link from 'next/link';
import useCurrentMenu from '../../_store/currentMenu';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const { currentMenu, setCurrentMenu } = useCurrentMenu((state) => state);

  return (
    <nav>
      <menu className={styles.container}>
        <li className={styles.list}>
          <Link href="/">
            <div>로고</div>
          </Link>
        </li>
        <li
          onClick={() => setCurrentMenu('공공 공고')}
          className={`${styles.list} ${currentMenu === '공공 공고' && styles.current}`}
        >
          <h2 className={styles.menuText}>공공 공고</h2>
        </li>
        <li
          onClick={() => setCurrentMenu('공공 단지')}
          className={`${styles.list} ${currentMenu === '공공 단지' && styles.current}`}
        >
          <h2 className={styles.menuText}>공공 단지</h2>
        </li>
      </menu>
    </nav>
  );
}
