import { decodeTitle } from '@/lib/utils';

function MovieDetail({ params }: any) {
  const [title, id] = params;
  const decodedTitle = decodeTitle(title);
  return <h4>{decodedTitle}</h4>;
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}

export default MovieDetail;
