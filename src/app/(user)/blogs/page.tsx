import BlogItem from '@/components/layout/blogs/blogItem';
import Empty from '@/components/layout/empty/empty';
import PageTitle from '@/components/layout/pageTitle/pageTitle';
import React from 'react';
import styles from './styles.module.css';

export const metadata = {
  title: 'Blogs'
};

const blog = {
  title: 'Top Hikes In Australia',
  content: [
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...'
  ]
};

const page = () => (
  <div className={styles.blogContainer}>
    <PageTitle>Blog</PageTitle>
    <div className={styles.content}>
      <BlogItem blog={blog} />
    </div>
  </div>
);

export default page;
