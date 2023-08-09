import React from 'react';
import { Post } from '@/types/blogs';
import RecentBlog from '../blogs/recentBlog';
import Empty from '../empty/empty';
import styles from './recentPosts.module.css';

type Props = {
  blogData: Post[];
};

const RecentPosts = ({ blogData }: Props) => {
  const isEmpty = blogData.length <= 1;

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h2>Recent Posts</h2>
      </div>
      <div className={isEmpty ? styles.emptyContent : styles.content}>
        {isEmpty ? (
          <Empty />
        ) : (
          blogData
            .reverse()
            .slice(1, process.env.NEXT_PUBLIC_NUM_RECENT_POSTS)
            .map((blog) => <RecentBlog key={`recent-${blog.id}`} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default RecentPosts;
