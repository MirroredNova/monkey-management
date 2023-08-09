import React from 'react';
import { Post } from '@/types/blogs';
import FeaturedBlog from '../blogs/featuredBlog';
import Empty from '../empty/empty';
import styles from './featuredPosts.module.css';

type Props = {
  blogData: Post[];
};

const FeaturedPosts = ({ blogData }: Props) => {
  const featuredBlog = blogData.at(-1);

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Featured Post</h2>
      </div>
      <div>
        {blogData.length === 0 ? (
          <Empty />
        ) : (
          featuredBlog && <FeaturedBlog blog={featuredBlog} />
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
