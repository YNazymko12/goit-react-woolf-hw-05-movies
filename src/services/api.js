import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3/';

const API_KEY = '6498fc8ca7823e31f972fc635d8e33da';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getSearchQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
