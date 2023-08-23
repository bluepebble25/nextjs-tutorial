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
    <div>
      {!movies.length && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Home;
