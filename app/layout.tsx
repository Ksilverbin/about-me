import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

// 페이지 첫 로드 시 저장된 테마를 즉시 적용 (FOUC 방지)
// React 렌더보다 먼저 실행되어 화면 깜빡임 없음
const themeScript = `
(function() {
  var saved = localStorage.getItem('theme');
  var theme = saved === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

export const metadata: Metadata = {
  title: "김은빈 | Frontend Developer",
  description: "김은빈 프론트엔드 개발자 이력서",
  openGraph: {
    title: '김은빈 | Frontend Developer',
    description: '사용자 경험을 코드로 설계하는 4년 차 프론트엔드 개발자 김은빈입니다.',
    url: 'https://about-eb.vercel.app/',
    siteName: '김은빈 이력서',
    images: [
      {
        url: 'https://about-eb.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKR.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* FOUC 방지: React 하이드레이션 전에 동기적으로 실행 */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
