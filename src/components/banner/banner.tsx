import Image from 'next/image';
import React from 'react';
import { Project } from '@/types/projects';
import { Blog } from '@/types/blogs';
import styles from './banner.module.css';

type Props = {
  object: Project | Blog;
};

const Banner = ({ object }: Props) => (
  <div className={styles.bannerContainer}>
    <Image
      alt={`${object.title}ImageBanner`}
      unoptimized
      width={1920}
      height={600}
      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_PROJECT_BANNER_IMAGE_TRANSFORMATION}/${object?.coverImage}`}
    />
  </div>
);

export default Banner;
