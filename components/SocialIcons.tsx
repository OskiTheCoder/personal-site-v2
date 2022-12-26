import React from 'react';
import Image from 'next/image';
import styles from '../styles/SocialIcons.module.css';

const SocialIcons: React.FC = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.icon}
        href='https://github.com/OskiTheCoder'
        target='blank'
        rel='noopener noreferrer'
      >
        <Image src='/github.svg' height={40} width={40} alt='github icon' />
      </a>
      <a
        className={styles.icon}
        href='https://www.linkedin.com/in/shelvin-singh-893585172'
        target='blank'
        rel='noopener noreferrer'
      >
        <Image src='/linkedin.svg' height={40} width={40} alt='linkedin icon' />
      </a>
      <a className={styles.icon} href='mailto: sks91@berkeley.edu'>
        <Image src='/gmail.svg' height={40} width={40} alt='gmail icon' />
      </a>
    </div>
  );
};

export default SocialIcons;
