import React from 'react';
import { Post } from '@/types/blogs';
import FeaturedBlogCard from '@/components/blogs/featuredBlogCard/featuredBlogCard';
import Empty from '../../shared/empty/empty';
import styles from './featuredBlog.module.css';

type Props = {
  blogData: Post[];
};

const FeaturedBlog = ({ blogData }: Props) => {
  const featuredBlog = blogData.at(-1);

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Featured Post</h2>
      </div>
      <>
        {blogData.length === 0 ? (
          <Empty />
        ) : (
          featuredBlog && <FeaturedBlogCard blog={featuredBlog} />
        )}
      </>
    </div>
  );
};

export default FeaturedBlog;
