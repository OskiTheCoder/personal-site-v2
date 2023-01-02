import React from 'react';
import styles from '../styles/Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return <section className={styles.container}>{props.children}</section>;
};

export default Container;
