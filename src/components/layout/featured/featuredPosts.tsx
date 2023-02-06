import React from 'react';
import Empty from '../empty/empty';
import styles from './featuredPosts.module.css';

const FeaturedPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Featured Post</h2>
      </div>
      <div>
        <Empty />
      </div>
    </div>
  </section>
);

export default FeaturedPosts;
