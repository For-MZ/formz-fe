import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={'/'}>로고</Link>
          </li>
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
        </ul>
        <Link href={'/pages/login'}>로그인</Link>
        <Link href={'/pages/mypage'}>마이페이지</Link>
        <Link href={'/pages/signup'}>회원가입</Link>
      </nav>
    </header>
  );
}
