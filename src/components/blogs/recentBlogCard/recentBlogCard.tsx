import { Post } from '@/types/blogs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Times from '@/components/shared/times/times';
import styles from './recentBlogCard.module.css';

type Props = {
  blog: Post;
};

const RecentBlogCard = ({ blog }: Props) => (
  <Link href={`/blogs/${blog?.id}`}>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
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
        <h2>{blog?.title}</h2>
      </div>
    </div>
  </Link>
);

export default RecentBlogCard;
