import React from 'react';
import Loader from './Loader';
import styles from '../styles/BlogComingSoon.module.css';

const BlogComingSoon: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <Loader />
        <div className={styles['text-container']}>
          <h3 className={styles.heading}>Blog</h3>
          <p className={styles.subtext}>Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;
