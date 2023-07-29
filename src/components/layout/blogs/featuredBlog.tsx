import React from 'react';
import { Blog } from '@/types/blogs';
import Image from 'next/image';
import BlogService from '@/services/blog.service';
import Link from 'next/link';
import styles from './featuredBlog.module.css';

type Props = {
  blog: Blog;
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
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.timeContainer}>
          {blog.creationDate &&
            BlogService.timeSince(new Date(blog?.creationDate))}{' '}
          &bull; 2 min
        </div>
        <div className={styles.contentContainer}>
          <h1>{blog?.title}</h1>
          <p>{blog?.subtext}</p>
        </div>
        {/* <div className={styles.commentContainer}>0 comments</div> */}
      </div>
    </div>
  </Link>
);

export default FeaturedBlog;
