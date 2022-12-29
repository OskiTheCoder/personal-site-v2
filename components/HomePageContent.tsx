import React from 'react';
import HeroCard from './HeroCard';
import SocialIcons from './SocialIcons';
import PlantCard from './PlantCard';
import styles from '../styles/HomePageContent.module.css';
import BlogComingSoon from './BlogComingSoon';

const HomePageContent: React.FC = () => {
  return (
    <>
      <div className={styles['left-container']}>
        <HeroCard />
        <SocialIcons />
      </div>
      <div className={styles['right-container']}>
        <PlantCard />
        <BlogComingSoon />
      </div>
    </>
  );
};

export default HomePageContent;
