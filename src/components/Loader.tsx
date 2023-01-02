import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles['loading-tick-1']}></div>
        <div className={styles['loading-tick-2']}></div>
        <div className={styles['loading-tick-3']}></div>
        <div className={styles['loading-tick-4']}></div>
        <div className={styles['loading-tick-5']}></div>
        <div className={styles['loading-tick-6']}></div>
        <div className={styles['loading-tick-7']}></div>
        <div className={styles['loading-tick-8']}></div>
        <div className={styles['loading-tick-9']}></div>
        <div className={styles['loading-tick-10']}></div>
        <div className={styles['loading-tick-11']}></div>
        <div className={styles['loading-tick-12']}></div>
      </div>
    </div>
  );
};

export default Loader;
