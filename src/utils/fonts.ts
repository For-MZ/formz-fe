import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/PretendardVariable.woff2' },
    {
      path: '../../public/fonts/PretendardVariable.ttf',
    },
  ],
  display: 'swap',
  weight: '45 920',
});
