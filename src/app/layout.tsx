import type { Metadata } from 'next';
import '@/styles/main.scss';
import Header from '@/components/Header';
import { pretendard } from '@/utils/fonts';

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
        <div id="portal" />
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
