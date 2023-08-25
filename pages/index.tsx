import { useState, useEffect } from 'react';

function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch('/api/movies')).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      {!movies.length && <h4>Loading...</h4>}
      {movies?.map((movie: any) => (
        <div className="movie" key={movie.id}>
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

export default Home;
