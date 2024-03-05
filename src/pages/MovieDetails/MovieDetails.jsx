import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

import { Loader } from 'components/Loader/Loader';
import noImage from 'images/no-image.jpg';
import partnerImage from 'images/TMDB.svg';

import {
  Button,
  Wrapper,
  Title,
  Subtitle,
  Text,
  GenresList,
  ProductionsList,
  Break,
  InfoTitle,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        setLoading(true);
        const detailMovie = await getMovieDetails(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetail();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return null;
  }

  const { title, release_date, overview, genres, poster_path, original_title } =
    movieInfo;

  const movieList = movieInfo.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginBottom: 10,
              }}
            />
          )}
        </li>
      )
  );

  const roundedPopularity = Math.round(movieInfo.vote_average * 10);
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>

      <Wrapper>
        <img
          width="360px"
          height="480px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImage}`
          }
          alt={original_title}
        />
        <div>
          <Title>
            {title} ({release_date.slice(0, 4)})
          </Title>
          <Text>User score: {roundedPopularity}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <GenresList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>

          {movieList[0] !== null && movieList.length > 0 && (
            <>
              <Subtitle>Production companies</Subtitle>
              <ProductionsList>
                {movieList}
                <img
                  width="200"
                  height="50"
                  src={partnerImage}
                  alt="TMDB Service"
                />
              </ProductionsList>
            </>
          )}
        </div>
      </Wrapper>

      <Break />

      <div>
        <InfoTitle>Additional information</InfoTitle>
        <InfoList>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </InfoList>
        <Break />

        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
