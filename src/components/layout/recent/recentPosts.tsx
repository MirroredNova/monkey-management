import React from 'react';
import styles from './recentPosts.module.css';

const RecentPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Recent Post</h2>
      </div>
      <div className={styles.content}>
        <h3>Check back soon</h3>
        <p>Once posts are published, you{"'"}ll see them here.</p>
      </div>
    </div>
  </section>
);

export default RecentPosts;
