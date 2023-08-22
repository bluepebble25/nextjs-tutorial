import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
