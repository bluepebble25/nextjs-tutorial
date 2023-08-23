import { useRouter } from 'next/router';
import Head from 'next/head';

interface TitleMap {
  [key: string]: string;
}

function Seo() {
  const router = useRouter();
  const title: TitleMap = { '/': 'Home', '/about': 'About' };
  return (
    <Head>
      <title>{title[router.pathname]} | Next Movies </title>
    </Head>
  );
}

export default Seo;
