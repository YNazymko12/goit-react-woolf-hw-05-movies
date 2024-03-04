import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #6d4b88;
  border-radius: 6px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 8px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ProductionsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Break = styled.hr`
  margin-top: 4px;
`;

export const InfoTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLink = styled(Link)`
  &:hover {
    color: #6d4b88;
  }
`;
