import React from 'react';
import styles from './empty.module.css';

const Empty = () => (
  <div className={styles.content}>
    <h3>Check back soon</h3>
    <p>Once posts are published, you{"'"}ll see them here.</p>
  </div>
);

export default Empty;
