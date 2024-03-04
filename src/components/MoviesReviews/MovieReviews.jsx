import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieReviews.module.css';
import { MovieReviewItem } from './MovieReviewsItem';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await fetchMovieAPI.getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const { results } = reviews;

  return (
    <div className={styles.section}>
      <h3 className={styles.reviewsHeader}>Review</h3>
      <div className={styles.reviews}>
        {results &&
          results.map(author => (
            <MovieReviewItem key={author.id} reviewer={author} />
          ))}
      </div>
    </div>
  );
};

export default MoviesReviews;
