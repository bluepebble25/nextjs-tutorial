function MovieDetail({ params }: any) {
  const [title, id] = params;
  return <h4>{title}</h4>;
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}

export default MovieDetail;
