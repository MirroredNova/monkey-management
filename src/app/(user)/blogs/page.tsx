import Empty from '@/components/shared/empty/empty';
import PageTitle from '@/components/shared/pageTitle/pageTitle';
import React from 'react';
import { fetchData } from '@/services/firebase.service';
import BlogItem from '@/components/blogs/blogItem/blogItem';
import styles from './styles.module.css';

export const metadata = {
  title: 'Blogs'
};

const page = async () => {
  const blogData = await fetchData('blogs');
  const isEmpty = blogData.length === 0;

  return (
    <>
      <PageTitle>Blogs</PageTitle>
      <div className={isEmpty ? styles.emptyContent : styles.content}>
        {isEmpty ? (
          <Empty />
        ) : (
          blogData
            .reverse()
            .map((blog) => <BlogItem key={blog.id} blog={blog} />)
        )}
      </div>
    </>
  );
};

export default page;
