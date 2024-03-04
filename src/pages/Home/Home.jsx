import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/api';

import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        const trendingFilms = await getTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
