import React from 'react';
import Image from 'next/image';
import styles from '../styles/Vote.module.css';

const Vote = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles['vote-coffee']} ${styles['vote-container']}`}>
        <Image src='/coffee.svg' height={40} width={40} alt='coffee' />
        <button className={styles['vote-btn']}>Coffee</button>
        <span className={styles.votes}>-1 vote</span>
      </div>
      <div className={`${styles['vote-tea']} ${styles['vote-container']}`}>
        <Image src='/tea.svg' height={40} width={40} alt='tea' />
        <button className={styles['vote-btn']}>Tea</button>
        <span className={styles.votes}>-1 vote</span>
      </div>
    </div>
  );
};

export default Vote;
