import Image from 'next/image';
import React from 'react';
import { Project } from '@/types/projects';
import styles from './banner.module.css';

type Props = {
  project: Project;
};

const Banner = ({ project }: Props) => (
  <div className={styles.bannerContainer}>
    <Image
      alt="ProjectImageBanner"
      width={1920}
      height={600}
      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_PROJECT_BANNER_IMAGE_TRANSFORMATION}/${project?.coverImage}`}
    />
  </div>
);

export default Banner;
