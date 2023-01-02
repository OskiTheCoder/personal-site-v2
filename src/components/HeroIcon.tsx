import React from 'react';
import Image from 'next/image';
import styles from '../styles/HeroIcon.module.css';

const HeroIcon: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.bolt}>
        <Image src='/bolt.svg' height={30} width={30} alt='bolt' />
      </div>
    </div>
  );
};

export default HeroIcon;
