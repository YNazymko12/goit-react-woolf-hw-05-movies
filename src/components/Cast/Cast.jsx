import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActors } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import noImage from 'images/no-image.jpg';

import { CastTitle, CastList, CastName, CastText } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCastOfMovie = async () => {
      try {
        setLoading(true);
        const actorsData = await getActors(movieId);
        setActors(actorsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCastOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <CastTitle>Movie Cast</CastTitle>
      <CastList>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="240px"
              height="320px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${noImage}`
              }
              alt={original_name}
            />
            <CastName>{name}</CastName>
            <CastText>Character: {character}</CastText>
          </li>
        ))}
      </CastList>
    </div>
  );
};
export default Cast;
