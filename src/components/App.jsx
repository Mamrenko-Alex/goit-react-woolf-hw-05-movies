import { fetchMovieAPI } from 'api/backend';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

fetchMovieAPI.getPopularMovies();
fetchMovieAPI.getMovieDetail(1051);
fetchMovieAPI.getMovieCredits(1051);
fetchMovieAPI.getMovieReviews(1051);
fetchMovieAPI.searchMovies('batman');
