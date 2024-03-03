import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #e6dddd;
  display: inline;
  margin-right: 20px;
  text-decoration: none;
  position: relative; 

  &:hover {
    color: #e1cf69; 
  }

  &.active {
    color: #ffd700; 
  }

  &.active:after {
    content: ''; 
    display: block; 
    width: 100%; 
    height: 2px; 
    background-color: #ffd700; 
    position: absolute; 
    bottom: -2px; 
    left: 0; 
`;

export const Header = () => {
  return (
    <header className={styles.header}>
      {' '}
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </header>
  );
};
