import React from 'react';
import styles from './MovieListItem.module.css';

export const MovieListItem = ({ movie }) => {
  return (
    <li className={styles.movie_item}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
      />
    </li>
  );
};

// {movie.title || movie.name} Названия фильма путь зависит от типа контента. Фильм или сериал
// { movie.media_type } Content type movie or tv(serial)

/* <p>{movie.title || movie.name}</p>
      <p> {movie.media_type}</p>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.poster_path}</p> */
