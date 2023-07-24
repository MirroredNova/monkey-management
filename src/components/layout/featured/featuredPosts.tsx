import React from 'react';
import FeaturedBlog from '../blogs/featuredBlog';
// import Empty from '../empty/empty';
import styles from './featuredPosts.module.css';

const blog = {
  title: 'Top Hikes In Australia',
  content: [
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...'
  ]
};

const FeaturedPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Featured Post</h2>
      </div>
      <div>
        <FeaturedBlog blog={blog} />
      </div>
    </div>
  </section>
);

export default FeaturedPosts;
