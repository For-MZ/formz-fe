'use client';

import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  const navMenu = [
    {
      href: '/youth-policy',
      name: '청년 정책',
    },
    {
      href: '/youth-place',
      name: '청년 공간',
    },
    {
      href: '/happy-housing',
      name: '행복 주택',
    },
    {
      href: '/community',
      name: '커뮤니티',
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navMenu}>
          <Link className={styles.navMenuLink} href={'/'}>
            로고
          </Link>
          {navMenu.map(({ href, name }) => (
            <li key={href}>
              <Link href={href} className={`${styles.navMenuLink} ${pathName === href && styles.selected}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={'/login'} className={`${styles.navMenuLink} ${pathName === '/login' && styles.selected}`}>
          로그인
        </Link>
      </nav>
    </header>
  );
}
