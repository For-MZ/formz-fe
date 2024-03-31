import type { Metadata } from 'next';
import { pretendard } from '@/utils/fonts';
import '@/styles/main.scss';
import RQProvider from './_components/RQProvider';

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
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
