import React from 'react';
import { fetchBlogData } from '@/services/firebase.service';
import Banner from '@/components/banner/banner';
import BlogContent from '@/components/blogs/content';
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
  const blogs = await fetchBlogData();
  const blogIndex = blogs.findIndex((blog) => blog.id === params.id);

  return (
    <div>
      {blogs[blogIndex] && (
        <>
          <Banner object={blogs[blogIndex]} />
          <BlogContent
            blog={blogs[blogIndex]}
            nextBlogId={blogs[blogIndex - 1]?.id}
            prevBlogId={blogs[blogIndex + 1]?.id}
          />
        </>
      )}
    </div>
  );
};

export default page;
