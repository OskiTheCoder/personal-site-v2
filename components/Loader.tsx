import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles['loading-bar-1']}></div>
        <div className={styles['loading-bar-2']}></div>
        <div className={styles['loading-bar-3']}></div>
        <div className={styles['loading-bar-4']}></div>
        <div className={styles['loading-bar-5']}></div>
        <div className={styles['loading-bar-6']}></div>
        <div className={styles['loading-bar-7']}></div>
        <div className={styles['loading-bar-8']}></div>
        <div className={styles['loading-bar-9']}></div>
        <div className={styles['loading-bar-10']}></div>
        <div className={styles['loading-bar-11']}></div>
        <div className={styles['loading-bar-12']}></div>
      </div>
    </div>
  );
};

export default Loader;
