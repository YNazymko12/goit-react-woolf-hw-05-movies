import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';

import { ReviewsTitle, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setLoading(true);
        const getReview = await getReviews(movieId);
        setReviews(getReview);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <div>
          <ReviewsTitle>Movie Reviews</ReviewsTitle>
          <ReviewsList>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ReviewsList>
        </div>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
