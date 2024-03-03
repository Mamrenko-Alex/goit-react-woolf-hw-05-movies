import React from 'react';
import styles from './MovieReviews.module.css';

export const MovieReviewItem = ({ reviewer }) => {
  const { author_details, author, content } = reviewer;
  return (
    <div className={styles.review}>
      <img
        src={
          author_details.avatar_path
            ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
            : 'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png'
        }
        alt={author}
        width={150}
      />
      <h4 className={styles.reviewerName}>{author}</h4>
      <p className={styles.reviewContent}>{content}</p>
    </div>
  );
};
