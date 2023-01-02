import { Albert_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Heading from '../components/Heading';
import '../styles/globals.css';

const albert = Albert_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heading />
      <main className={albert.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
