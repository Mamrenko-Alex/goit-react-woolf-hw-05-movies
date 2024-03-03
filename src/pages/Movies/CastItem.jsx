import React from 'react';
import styles from './MovieCast.module.css';

export const CastItem = ({ artist }) => {
  const { character, name, profile_path } = artist;

  return (
    <div className={styles.castItem}>
      <div className={styles.image}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png'
          }
          alt={name}
        />
      </div>
      <div className={styles.details}>
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </div>
    </div>
  );
};
