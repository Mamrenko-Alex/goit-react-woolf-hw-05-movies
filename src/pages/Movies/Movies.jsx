import { fetchMovieAPI } from 'api/backend';
import React, { useEffect, useState } from 'react';
import styles from '../Home/Home.module.css';
import { BackButton } from 'components/buttons/BackButton';
import { HomeButton } from 'components/buttons/HomeButtons';
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
    if (query) {
      fetchSearchMovie(query);
    }
  }, [query]);

  return (
    <div>
      <h1>Search movie</h1>
      <BackButton />
      <HomeButton />
      <SearchForm searchSubmit={fetchSearchMovie} />
      <div className={`container ${styles.movie_section}`}>
        <MovieList movies={searchMovies} />
      </div>
    </div>
  );
};

export default Movies;
