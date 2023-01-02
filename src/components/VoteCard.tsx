import React from 'react';
import Vote from './Vote';
import styles from '../styles/VoteCard.module.css';

const VoteCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <Vote />
        <div className={styles['text-container']}>
          <h3 className={styles.heading}>Coffee or Tea?</h3>
          <p className={styles.subtext}>Vote to see results! 🗳️</p>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
