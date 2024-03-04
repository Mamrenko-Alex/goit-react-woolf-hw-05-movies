import React from 'react';
import { MovieListItem } from './MovieListItem';
import styles from '../../pages/Home/Home.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movie_list}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
