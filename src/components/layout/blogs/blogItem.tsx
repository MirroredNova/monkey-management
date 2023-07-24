import { Blog } from '@/types/blogs';
import Image from 'next/image';
import React from 'react';
import Author from './author';
import styles from './blogItem.module.css';

type Props = {
  blog?: Blog;
};

const BlogItem = ({ blog }: Props) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image
        src="https://res.cloudinary.com/dhhcxidye/image/upload/v1685936711/cld-sample-5.jpg"
        width={1080}
        height={1080}
        alt={''}
      />
    </div>
    <Author />
    <div className={styles.contentContainer}>
      <h1>{blog?.title}</h1>
      <p>{blog?.content[0]}</p>
    </div>
  </div>
);

export default BlogItem;
