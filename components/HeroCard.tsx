import React from 'react';
import HeroIcon from './HeroIcon';
import HeroText from './HeroText';
import Resume from './Resume';
import styles from '../styles/HeroCard.module.css';

const HeroCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeroIcon />
      <HeroText />
      <Resume />
    </div>
  );
};

export default HeroCard;
