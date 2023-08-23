const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
