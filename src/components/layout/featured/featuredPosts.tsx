import FirebaseService from '@/services/firebase.service';
import React from 'react';
import FeaturedBlog from '../blogs/featuredBlog';
import Empty from '../empty/empty';
import styles from './featuredPosts.module.css';

const FeaturedPosts = async () => {
  const blogData = await FirebaseService.fetchBlogData();

  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2>Featured Post</h2>
        </div>
        <div>
          {blogData.length === 0 ? (
            <Empty />
          ) : (
            <FeaturedBlog blog={blogData.at(-1)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
