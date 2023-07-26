import { Blog } from '@/types/blogs';
import Image from 'next/image';
import React from 'react';
import BlogService from '@/services/blog.service';
import Author from './author';
import styles from './blogItem.module.css';

type Props = {
  blog?: Blog;
};

const BlogItem = ({ blog }: Props) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${blog?.coverImage}`}
        width={1080}
        height={1080}
        alt={''}
      />
    </div>
    {blog?.creationDate && (
      <Author agoText={BlogService.timeSince(new Date(blog?.creationDate))} />
    )}
    <div className={styles.contentContainer}>
      <h1>{blog?.title}</h1>
      <p>{blog?.content[0]}</p>
    </div>
  </div>
);

export default BlogItem;
