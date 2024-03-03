import React from 'react';
import styles from './MovieListItem.module.css';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ movie }) => {
  const { id, poster_path, title, name } = movie;
  return (
    <li className={styles.movie_item} id={id}>
      <Link to={`/movies/${id}`}>
        <img
          className={styles.poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://cdn0.iconfinder.com/data/icons/videographer-filmmaker-and-cameraman/237/filming-002-512.png'
          }
          alt={title || name}
        />
      </Link>
    </li>
  );
};
