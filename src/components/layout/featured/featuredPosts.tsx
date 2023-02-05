import React from 'react';
import styles from './featuredPosts.module.css';

const FeaturedPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Featured Post</h2>
      </div>
      <div className={styles.content}>
        <h3>Check back soon</h3>
        <p>Once posts are published, you&apos;ll see them here.</p>
      </div>
    </div>
  </section>
);

export default FeaturedPosts;
