import React from 'react';
import { Post } from '@/types/blogs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './featuredBlog.module.css';
import Times from '../times/times';

type Props = {
  blog: Post;
};

const FeaturedBlog = ({ blog }: Props) => (
  <Link href={`/blogs/${blog?.id}`}>
    <div className={styles.container}>
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_FEATURED_IMAGE_TRANSFORMATION}/${blog?.coverImage}`}
          alt="blog"
          width={1080}
          height={1080}
          unoptimized
        />
      </div>
      <div className={styles.textContainer}>
        <Times blog={blog} />
        <div className={styles.contentContainer}>
          <h1>{blog?.title}</h1>
          <p>{blog?.subtext}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedBlog;
