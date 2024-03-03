import { fetchMovieAPI } from 'api/backend';
import { MovieListItem } from 'pages/Movies/MovieListItem';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

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
    <section className={`container ${styles.movie_section}`}>
      <ul className={styles.movie_list}>
        {popularMovies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};
