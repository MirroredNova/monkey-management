import BlogItem from '@/components/layout/blogs/blogItem';
import Empty from '@/components/layout/empty/empty';
import PageTitle from '@/components/layout/pageTitle/pageTitle';
import React from 'react';
import { fetchBlogData } from '@/services/firebase.service';
import styles from './styles.module.css';

export const metadata = {
  title: 'Blogs'
};

const page = async () => {
  const blogData = await fetchBlogData();
  const isEmpty = blogData.length === 0;

  return (
    <div className={styles.blogContainer}>
      <PageTitle>Blog</PageTitle>
      <div className={isEmpty ? styles.emptyContent : styles.content}>
        {isEmpty ? (
          <Empty />
        ) : (
          blogData
            .reverse()
            .map((blog) => <BlogItem key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default page;
