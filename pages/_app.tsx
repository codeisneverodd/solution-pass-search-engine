import 'styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
