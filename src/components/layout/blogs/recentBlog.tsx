import { Blog } from '@/types/blogs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './recentBlog.module.css';

type Props = {
  blog?: Blog;
};

const RecentBlog = ({ blog }: Props) => (
  <Link href={`/blogs/${blog?.id}`}>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_FEATURED_IMAGE_TRANSFORMATION}/${blog?.coverImage}`}
          alt="blog"
          width={1080}
          height={1080}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{blog?.title}</h2>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faComment as IconProp} />
          <span> 0</span>
        </div>
      </div>
    </div>
  </Link>
);

export default RecentBlog;
