import { fetchMovieAPI } from 'api/backend';
import { Routes, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};

fetchMovieAPI.getPopularMovies();
fetchMovieAPI.getMovieDetail(1051);
fetchMovieAPI.getMovieCredits(1051);
fetchMovieAPI.getMovieReviews(1051);
fetchMovieAPI.searchMovies('batman');
