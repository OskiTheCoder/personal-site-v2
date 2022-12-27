import React from 'react';
import Image from 'next/image';
import PlantWithShadow from './PlantWithShadow';
import styles from '../styles/DailyUI.module.css';

const DailyUI: React.FC = () => {
  return (
    <div className={styles.container}>
      <PlantWithShadow />
      <div className={styles.text}>
        <div className={styles['heading-container']}>
          <h3 className={styles.heading}>Daily UI - Exotic Plant</h3>
          <a
            href='https://github.com/OskiTheCoder'
            target='blank'
            rel='noopener noreferrer'
          >
            <Image src='/code.svg' height={20} width={20} alt='code' />
          </a>
        </div>
        <p className={styles.subtext}>Made with pure CSS</p>
      </div>
    </div>
  );
};

export default DailyUI;
