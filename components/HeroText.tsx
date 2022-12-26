import React from 'react';
import styles from '../styles/HeroText.module.css';

const HeroText: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hi, I'm Shelvin</h1>
      <h2 className={styles.secondary}>Software Engineer at EasyPost</h2>
      <p className={styles.subtext}>
        I build (web) applications with delightful user experiences backed by
        highly performant and efficient code.
      </p>
    </div>
  );
};

export default HeroText;
