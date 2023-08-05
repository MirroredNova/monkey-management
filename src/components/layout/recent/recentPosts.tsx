import React from 'react';
import { Blog } from '@/types/blogs';
import RecentBlog from '../blogs/recentBlog';
import Empty from '../empty/empty';
import styles from './recentPosts.module.css';

type Props = {
  blogData: Blog[];
};

const RecentPosts = ({ blogData }: Props) => {
  const isEmpty = blogData.length <= 1;

  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2>Recent Post</h2>
        </div>
        <div className={isEmpty ? styles.emptyContent : styles.content}>
          {isEmpty ? (
            <Empty />
          ) : (
            blogData
              .reverse()
              .slice(1, process.env.NEXT_PUBLIC_NUM_RECENT_POSTS)
              .map((blog) => (
                <RecentBlog key={`recent-${blog.id}`} blog={blog} />
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
