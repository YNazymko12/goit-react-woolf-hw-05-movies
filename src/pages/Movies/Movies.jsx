import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);

  const movieName = searchParams.get('query') || '';

  const updateQuery = query => {
    const params = query !== '' && { query };
    setSearchParams(params);
    setInvalidRequest(false);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await getSearchQuery(movieName);
        setSearchFilms(movies);
        setInvalidRequest(movies.length === 0 && movieName !== '');
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <main>
      <Form searchMovies={updateQuery} />
      {loading && <Loader />}
      {invalidRequest && (
        <p>There are no movies with this request. Please, try again...</p>
      )}

      {searchFilms.length > 0 && <MovieList films={searchFilms} />}
    </main>
  );
};
export default Movies;
