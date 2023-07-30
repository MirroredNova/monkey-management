import React from 'react';
import { fetchBlogData } from '@/services/firebase.service';
import styles from './styles.module.css';

export const metadata = {
  title: 'Blogs'
};

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const blogs = (await fetchBlogData()).find((blog) => blog.id === params.id);

  return (
    <div className={styles.container}>
      <div>
        <h1>{blogs?.title}</h1>
      </div>
    </div>
  );
};

export default page;
