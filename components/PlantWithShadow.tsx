import React from 'react';
import styles from '../styles/PlantWithShadow.module.css';

const PlantWithShadow = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.leaf} ${styles['leaf-1']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-2']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-3']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-4']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-5']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-6']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-7']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-8']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-9']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-10']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-11']}`}></div>
      <div className={`${styles.leaf} ${styles['leaf-12']}`}></div>
      <div className={styles.pot}></div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default PlantWithShadow;
