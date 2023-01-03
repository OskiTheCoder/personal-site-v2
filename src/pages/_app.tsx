import { Albert_Sans } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Heading from '../components/Heading';
import '../styles/globals.css';

const albert = Albert_Sans({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Heading />
      <main className={albert.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
