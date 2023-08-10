import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Banner from '@/components/banner/banner';
import BlogContent from '@/components/blogs/content';

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
          <BlogContent
            blog={blogs[blogIndex]}
            nextBlogId={blogs[blogIndex - 1]?.id}
            prevBlogId={blogs[blogIndex + 1]?.id}
          />
        </>
      )}
    </>
  );
};

export default page;
