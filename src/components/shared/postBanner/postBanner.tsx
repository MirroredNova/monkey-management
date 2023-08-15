import Image from 'next/image';
import React from 'react';
import { Post } from '@/types/blogs';
import styles from './postBanner.module.css';

type Props = {
  object: Post;
};

const PostBanner = ({ object }: Props) => (
  <div className={styles.bannerContainer}>
    <Image
      alt={`${object.title}ImageBanner`}
      unoptimized
      width={1920}
      height={500}
      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_PROJECT_BANNER_IMAGE_TRANSFORMATION}/${object?.coverImage}`}
    />
  </div>
);

export default PostBanner;
