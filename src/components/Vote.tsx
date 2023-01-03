import React from 'react';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import axios from 'axios';
import styles from '../styles/Vote.module.css';

type Vote = {
  coffee: number;
  tea: number;
};

const Vote = () => {
  const [voted, setVoted] = React.useState(false);
  const mutation = useMutation({
    mutationFn: (newVote: Vote) => {
      return axios.post('/api/vote', newVote);
    },
    onSuccess: () => {
      setVoted(true);
    },
  });

  const getMutationState = (mutation: any, isTea: boolean) => {
    if (mutation.isLoading) {
      return 'Loading...';
    }

    if (mutation.isError) {
      return 'Uhoh something went wrong :(';
    }

    if (mutation.isSuccess) {
      return isTea
        ? `${mutation.data.data.tea} votes!`
        : `${mutation.data.data.coffee} votes!`;
    }
    return '';
  };

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles['vote-coffee']} ${styles['vote-container']}`}>
          <Image src='/coffee.svg' height={40} width={40} alt='coffee' />
          <button
            className={styles['vote-btn']}
            onClick={() => {
              mutation.mutate({ coffee: 1, tea: 0 });
            }}
            disabled={voted}
          >
            Coffee
          </button>
          <span className={styles.votes}>
            {getMutationState(mutation, false)}
          </span>
        </div>
        <div className={`${styles['vote-tea']} ${styles['vote-container']}`}>
          <Image src='/tea.svg' height={40} width={40} alt='tea' />
          <button
            className={styles['vote-btn']}
            onClick={() => {
              mutation.mutate({ coffee: 0, tea: 1 });
            }}
            disabled={voted}
          >
            Tea
          </button>
          <span className={styles.votes}>
            {getMutationState(mutation, true)}
          </span>
        </div>
      </div>
      {voted && <h3 className={styles.heading}>Thanks for voting! 🥳</h3>}
    </>
  );
};

export default Vote;
