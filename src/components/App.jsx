import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetail = lazy(() => import('pages/Movies/MovieDetails'));
const MovieCast = lazy(() => import('pages/Movies/MovieCast'));
const MoviesReviews = lazy(() => import('pages/Movies/MovieReviews'));

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
