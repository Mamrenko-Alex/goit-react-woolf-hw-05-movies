import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../MovieDetail/MovieDetail.module.css';

export const BackButton = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return (
    <Link className={styles.linkButton} to={backLinkHref}>
      Back to movies
    </Link>
  );
};
