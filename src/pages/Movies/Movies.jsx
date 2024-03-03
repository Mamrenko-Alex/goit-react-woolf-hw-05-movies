import { fetchMovieAPI } from 'api/backend';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../Home/Home.module.css';
import { MovieListItem } from './MovieListItem';
import { BackButton } from 'components/buttons/BackButton';
import { HomeButton } from 'components/buttons/HomeButtons';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  const handleSearchChange = event => {
    setSearchParams({ query: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchName = event.target.search.value;
    if (searchName.length === 0) {
      return;
    }
    const fetchSearchMovie = async () => {
      const data = await fetchMovieAPI.searchMovies(searchName);
      setMovies(data.results);
      console.log(data);
    };
    fetchSearchMovie();
  };

  console.log(movies);

  return (
    <div>
      <h1>Search movie</h1>
      <BackButton />
      <HomeButton />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query || ''}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
        <ul className={styles.movie_list}>
          {movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Movies;
