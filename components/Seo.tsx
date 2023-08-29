import { useRouter } from 'next/router';
import Head from 'next/head';
import { decodeTitle } from '@/lib/utils';

interface TitleMap {
  [key: string]: string;
}

function Seo() {
  const router = useRouter();
  const title: TitleMap = { '/': 'Home', '/about': 'About' };

  if (router.asPath.startsWith('/movies/')) {
    const urlParts = router.asPath.split('/');
    const movieTitle = decodeTitle(urlParts[2]);
    return (
      <Head>
        <title>{`${movieTitle} | Next Movies `}</title>
      </Head>
    );
  }

  return (
    <Head>
      <title>{`${title[router.pathname]} | Next Movies `}</title>
    </Head>
  );
}

export default Seo;
