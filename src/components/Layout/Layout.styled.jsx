import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-right: 24px;
  padding-top: 20px;
  padding-bottom: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: #333;

  &.active {
    color: #6d4b88;
  }
`;
