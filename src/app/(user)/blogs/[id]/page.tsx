import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Banner from '@/components/banner/banner';
import BlogContent from '@/components/blogs/content';
import styles from './page.module.css';

export const metadata = {
  title: 'Blogs'
};

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const blogs = await fetchData('blogs');
  const blogIndex = blogs.findIndex((blog) => blog.id === params.id);

  return (
    <>
      {blogs[blogIndex] && (
        <>
          <Banner object={blogs[blogIndex]} />
          <div className={styles.body}>
            <BlogContent
              blog={blogs[blogIndex]}
              nextBlogId={blogs[blogIndex - 1]?.id}
              prevBlogId={blogs[blogIndex + 1]?.id}
            />
          </div>
        </>
      )}
    </>
  );
};

export default page;
