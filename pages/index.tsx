import { useRouter } from 'next/router';

function Home({ results }: any) {
  const router = useRouter();

  const handleClick = (id: number, title: string) => {
    router.push({ pathname: `movies/${title}/${id}` });
  };

  return (
    <div className="container">
      {results?.map((movie: any) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => handleClick(movie.id, movie.original_title)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.original_title}`}
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          margin-top: 10px;
          text-align: center;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}

export default Home;
