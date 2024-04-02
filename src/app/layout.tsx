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
        {/* div id="portal" 태그는 모달 띄우는 태그라 안에 넣으면 안됨 */}
        <div id="portal" />
      </body>
    </html>
  );
}
