import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const { title, description } = pageProps?.frontMatter || {};
  const Layout = require('../components/Layout').default;
  return (
    <Layout title={title} description={description}>
      <Component {...pageProps} />
    </Layout>
  );
}
