import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './HasNotMapLayout.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function HasNotMapLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
