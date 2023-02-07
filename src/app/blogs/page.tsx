import Empty from '@/components/layout/empty/empty';
import PageTitle from '@/components/layout/pageTitle/pageTitle';
import React from 'react';
import styles from './styles.module.css';

const page = () => (
  <div className={styles.blogContainer}>
    <PageTitle>Blog</PageTitle>
    <div className={styles.content}>
      <Empty />
    </div>
  </div>
);

export default page;
