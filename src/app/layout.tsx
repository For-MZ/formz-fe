import type { Metadata } from 'next';
import '@/styles/main.scss';
import Header from '@/components/Header';
import { pretendard } from '@/utils/fonts';
import Footer from '@/components/Footer';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'For MZ',
  description: 'MZ세대를 위한 웹 사이트',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        {/* div id="portal" 태그는 모달 띄우는 태그라 안에 넣으면 안됨 */}
        <div id="portal" />
      </body>
    </html>
  );
}
