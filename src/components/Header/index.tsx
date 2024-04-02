'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import defaultProfileImage from '/public/default-profile-image.png';

const navMenuList = [
  {
    href: '/youth-policy',
    name: '청년 정책',
    segment: 'youth-policy',
  },
  {
    href: '/youth-place',
    name: '청년 공간',
    segment: 'youth-place',
  },
  {
    href: '/youth-housing',
    name: '청년 주택',
    segment: 'youth-housing',
  },
  {
    href: '/community/posts',
    name: '커뮤니티',
    segment: 'community',
  },
];

export default function Header() {
  const pathName = usePathname();
  const currentSegment = useSelectedLayoutSegment();

  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.menuList}>
          <Link href="/" className={styles.link}>
            로고
          </Link>
          {navMenuList.map(({ href, name, segment }) => (
            <li key={href} className={styles.menu}>
              <Link href={href} className={`${styles.link} ${segment === currentSegment && styles.selected}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.userMenu}>
          {isLogin ? (
            <>
              <Link href={'/login'} className={`${styles.link} ${pathName === '/login' && styles.selected}`}>
                로그인
              </Link>
              <Link href={'/signup'} className={`${styles.link} ${pathName === '/signup' && styles.selected}`}>
                회원가입
              </Link>
              <Link href="/mypage">
                <Image src={defaultProfileImage} alt="기본 프로필 이미지" />
              </Link>
            </>
          ) : (
            <>
              <Link href={'/login'} className={`${styles.link} ${pathName === '/login' && styles.selected}`}>
                로그인
              </Link>
              <Link href={'/signup'} className={`${styles.link} ${pathName === '/signup' && styles.selected}`}>
                회원가입
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
