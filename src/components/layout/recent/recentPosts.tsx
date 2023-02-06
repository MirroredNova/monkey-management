import React from 'react';
import Empty from '../empty/empty';
import styles from './recentPosts.module.css';

const RecentPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Recent Post</h2>
      </div>
      <div className={styles.content}>
        <Empty />
      </div>
    </div>
  </section>
);

export default RecentPosts;
