import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import styles from '../Home/Home.module.css';
import { BackButton } from 'components/buttons/BackButton';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchMovies, setSearchMovies] = useState([]);

  const fetchSearchMovie = async searchName => {
    setSearchParams({ query: searchName });
    const data = await fetchMovieAPI.searchMovies(query);
    setSearchMovies(data.results);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchSearchMovie = async () => {
      const data = await fetchMovieAPI.searchMovies(query);
      setSearchMovies(data.results);
    };
    fetchSearchMovie();
  }, [query]);

  return (
    <div>
      <BackButton />
      <h1>Search movie</h1>
      <SearchForm searchSubmit={fetchSearchMovie} />
      <div className={`container ${styles.movie_section}`}>
        <MovieList movies={searchMovies} />
      </div>
    </div>
  );
};

export default Movies;
