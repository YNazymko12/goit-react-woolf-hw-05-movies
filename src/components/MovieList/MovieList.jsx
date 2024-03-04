import { useLocation } from 'react-router-dom';

import { Item, MovieLink } from './MovieList.styled';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink
            to={`/movies/${film.id}`}
            state={{ from: location }}
            cover={film.poster_path}
          >
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </ul>
  );
};
