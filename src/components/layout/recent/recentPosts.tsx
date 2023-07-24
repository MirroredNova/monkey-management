import React from 'react';
import RecentBlog from '../blogs/recentBlog';
import Empty from '../empty/empty';
import styles from './recentPosts.module.css';

const blog = {
  title: 'Top Hikes In Australia',
  content: [
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...'
  ]
};

const RecentPosts = () => (
  <section className={styles.container}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Recent Post</h2>
      </div>
      <div className={styles.content}>
        {/* <Empty /> */}
        <RecentBlog blog={blog} />
        <RecentBlog blog={blog} />
        <RecentBlog blog={blog} />
        <RecentBlog blog={blog} />
        <RecentBlog blog={blog} />
      </div>
    </div>
  </section>
);

export default RecentPosts;
