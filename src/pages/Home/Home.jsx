import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await fetchMovieAPI.getPopularMovies();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className={`container ${styles.movie_section}`}>
      <MovieList movies={popularMovies} />
    </div>
  );
};
