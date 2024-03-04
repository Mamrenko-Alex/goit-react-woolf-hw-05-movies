import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState({});

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await fetchMovieAPI.getMovieCredits(movieId);
        setCredits(data);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  const { cast } = credits;

  return (
    <div className={styles.castContainer}>
      <h3 className={styles.castHeader}>Cast</h3>
      <div className={styles.castWraper}>
        {cast && cast.map(item => <CastItem key={item.id} artist={item} />)}
      </div>
    </div>
  );
};

export default MovieCast;
