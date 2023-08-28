import { useRouter } from 'next/router';

function MovieDetail() {
  const router = useRouter();
  return <h4>{router.query.title || 'Loading...'}</h4>;
}

export default MovieDetail;
