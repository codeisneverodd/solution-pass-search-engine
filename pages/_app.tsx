import 'styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Bungee } from '@next/font/google';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});
const bungee = Bungee({ weight: '400', variable: '--font-bungee', display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.variable} ${bungee.variable} font-sans `}>
      <Component {...pageProps} />
    </main>
  );
}
