import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import { BackButton } from 'components/buttons/BackButton';
import { HomeButton } from 'components/buttons/HomeButtons';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await fetchMovieAPI.getMovieDetail(movieId);
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    fetchMoviesData();
  }, [movieId]);

  const {
    title,
    release_date,
    poster_path,
    vote_average,
    vote_count,
    overview,
    genres,
  } = movieData;

  return (
    <>
      <BackButton />
      <HomeButton />
      <section className={styles.movieInfoContainer}>
        <div className={styles.movieInfo}>
          <div className={styles.poster}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://cdn0.iconfinder.com/data/icons/videographer-filmmaker-and-cameraman/237/filming-002-512.png'
              }
              alt={title}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{title}</h1>
            <p>{release_date}</p>
            <p className={styles.rating}>
              The rating is {Number(vote_average).toFixed(2)} based on{' '}
              {vote_count} reviews
            </p>
            <div className={styles.description}>
              <h3 className={styles.headers}>Description</h3>
              <p>{overview}</p>
            </div>
            <div className={styles.genres}>
              <h3 className={styles.headers}>Genres</h3>
              <div className={styles.genresItem}>
                {genres && genres.map(({ name }) => <p key={name}>{name}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <Link className={styles.linkButton} to={`/movies/${movieId}/cast`}>
            Cast list
          </Link>
          <Link className={styles.linkButton} to={`/movies/${movieId}/reviews`}>
            Reviews List
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetail;
