import React from 'react';
import { Blog } from '@/types/blogs';
import Image from 'next/image';
import styles from './featuredBlog.module.css';

type Props = {
  blog?: Blog;
};

const FeaturedBlog = ({ blog }: Props) => (
  <div className={styles.container}>
    <div>
      <Image
        src="https://res.cloudinary.com/dhhcxidye/image/upload/v1685936710/cld-sample-2.jpg"
        alt="blog"
        width={1080}
        height={1080}
      />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.timeContainer}>1 minute ago &bull; 2 min</div>
      <div className={styles.contentContainer}>
        <h1>{blog?.title}</h1>
        <p>{blog?.content[0]}</p>
      </div>
      <div className={styles.commentContainer}>0 comments</div>
    </div>
  </div>
);

export default FeaturedBlog;
