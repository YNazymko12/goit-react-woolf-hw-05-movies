import styled from 'styled-components';
import { Link } from 'react-router-dom';
import noImage from '../../images/no-image.jpg';

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  &:hover {
    color: #6d4b88;
  }

  &:hover::after,
  &:focus::after {
    content: '';
    background-image: ${props =>
      props.cover
        ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
        : `url(${noImage})`};
    background-size: cover;
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 1;
    display: block;
    width: 400px;
    height: 560px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
