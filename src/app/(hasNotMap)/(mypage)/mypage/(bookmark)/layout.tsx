import BookmarkNav from '@/app/(hasNotMap)/(mypage)/_components/BookmarkNav';
import styles from './layout.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <BookmarkNav />
      <main>{children}</main>
    </div>
  );
}
