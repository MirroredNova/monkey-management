import React from 'react';
import styles from './pageTitle.module.css';

type Props = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: Props) => (
  <div className={styles.container}>
    <h2>{children}</h2>
  </div>
);

export default PageTitle;
