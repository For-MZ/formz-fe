import type { Metadata } from 'next';
import '@/styles/main.scss';
import Header from '@/components/Header';
import { pretendard } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'For MZ',
  description: 'MZ세대를 위한 웹 사이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
