import React from 'react';
import HeroCard from './HeroCard';
import SocialIcons from './SocialIcons';
import DailyUI from './DailyUI';
import styles from '../styles/HomePageContent.module.css';

const HomePageContent: React.FC = () => {
  return (
    <>
      <div className={styles['left-container']}>
        <HeroCard />
        <SocialIcons />
      </div>
      <div className={styles['right-container']}>
        <DailyUI />
      </div>
    </>
  );
};

export default HomePageContent;
