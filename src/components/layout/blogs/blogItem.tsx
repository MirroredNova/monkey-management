import { Blog } from '@/types/blogs';
import Image from 'next/image';
import React from 'react';
import BlogService from '@/services/blog.service';
import Link from 'next/link';
import Author from './author';
import styles from './blogItem.module.css';

type Props = {
  blog?: Blog;
};

const BlogItem = ({ blog }: Props) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Link href={`/blogs/${blog?.id}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_PROJECT_COVER_IMAGE_TRANSFORMATION}/${blog?.coverImage}`}
          width={1080}
          height={1080}
          alt={''}
        />
      </Link>
    </div>
    <div className={styles.authorContainer}>
      {blog?.creationDate && (
        <Author
          agoText={BlogService.timeSince(new Date(blog?.creationDate))}
          readTime={blog.readTime}
        />
      )}
    </div>
    <Link href={`/blogs/${blog?.id}`}>
      <div className={styles.contentContainer}>
        <h1>{blog?.title}</h1>
        <p>{blog?.subtext}</p>
      </div>
    </Link>
  </div>
);

export default BlogItem;
