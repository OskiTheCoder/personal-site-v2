import React from 'react';
import PlantWithShadow from './PlantWithShadow';
import styles from '../styles/DailyUI.module.css';

const DailyUI: React.FC = () => {
  return (
    <div className={styles.container}>
      <PlantWithShadow />
      <div className={styles.text}>
        <h3 className={styles.heading}>Daily(ish) UI - Plant</h3>
        <p className={styles.subtext}>Made with pure CSS!</p>
      </div>
    </div>
  );
};

export default DailyUI;
