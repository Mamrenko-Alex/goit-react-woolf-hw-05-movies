import axios from 'axios';

class MovieAPI {
  constructor() {
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.KEY = 'dcb1aae725d8aa9da21867dc6628b36a';

    axios.defaults.baseURL = this.BASE_URL;
    axios.defaults.params = {
      api_key: this.KEY,
    };
  }

  async getPopularMovies() {
    try {
      const response = await axios.get(`/trending/all/day`);
      return response.data;
      //   List with results, more 1000 pages. In response.results Array with detail movies
    } catch (error) {
      console.error('Something wrong: ', error.message);
    }
  }

  async searchMovies(name) {
    try {
      const response = await axios.get(`/search/movie`, {
        params: { query: name },
      });
      return response.data;
      //   List with results, more 100th pages. In response.results Array with detail movies like getPopularMovies
    } catch (error) {
      console.error('Something wrong: ', error.message);
    }
  }

  async getMovieDetail(id) {
    try {
      const response = await axios.get(`/movie/${id}`);
      return response.data;
      //   Info about one movie
    } catch (error) {
      console.error('Something wrong: ', error.message);
    }
  }

  async getMovieCredits(id) {
    try {
      const response = await axios.get(`/movie/${id}/credits`);
      return response.data;
      //   data includes object with 2 keys: cast and crew
    } catch (error) {
      console.error('Something wrong: ', error.message);
    }
  }

  async getMovieReviews(id) {
    try {
      const response = await axios.get(`/movie/${id}/reviews`);
      return response.data;
      //   In response.results Array with detail reviews to movie by id
    } catch (error) {
      console.error('Something wrong: ', error.message);
    }
  }
}

export const fetchMovieAPI = new MovieAPI();
