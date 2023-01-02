import React from 'react';
import styles from '../styles/Resume.module.css';

const Resume: React.FC = () => {
  return (
    <div>
      {' '}
      <a
        href='./NewResume.pdf'
        className={styles.resume}
        target='blank'
        rel='noopener noreferrer'
      >
        View Resume
      </a>
    </div>
  );
};

export default Resume;
