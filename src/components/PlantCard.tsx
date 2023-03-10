import React from 'react';
import Image from 'next/image';
import Plant from './Plant';
import styles from '../styles/PlantCard.module.css';

const PlantCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Plant />
      <div className={styles.text}>
        <div className={styles['heading-container']}>
          <h3 className={styles.heading}>Simple Plant</h3>
          <a
            href='https://github.com/OskiTheCoder'
            target='blank'
            rel='noopener noreferrer'
          >
            <Image src='/code.svg' height={20} width={20} alt='code' />
          </a>
        </div>
        <p className={styles.subtext}>Fun with CSS</p>
      </div>
    </div>
  );
};

export default PlantCard;
