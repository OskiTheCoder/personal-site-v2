import React from 'react';
import Image from 'next/image';
import styles from '../styles/Plant.module.css';

const Plant: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <div className={`${styles.leaf} ${styles['leaf-1']}`}></div>
        <div className={`${styles.leaf} ${styles['leaf-2']}`}></div>
        <div className={`${styles.leaf} ${styles['leaf-3']}`}></div>
        <div className={`${styles.leaf} ${styles['leaf-4']}`}></div>
        <div className={styles['plant-stem']}></div>
        <div className={styles['plant-pot-top']}></div>
        <div className={styles['outer-pot']}>
          <div className={styles.pot}></div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
