const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `${BASE_URL}/movie/popular?api_key=${MOVIE_API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `${BASE_URL}/movie/:id?api_key=${MOVIE_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
