import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/types/projects';
import styles from './card.module.css';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => (
  <div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_PROJECT_COVER_IMAGE_TRANSFORMATION}/${project?.coverImage}`}
        alt="cover image"
        width={509}
        height={403}
        unoptimized
      />
    </div>
    <div className={styles.textContainer}>
      <h2>{project.title}</h2>
      <p>{project.subtext}</p>
      <Link href={`/projects/${project.id}`}>Read More</Link>
    </div>
  </div>
);

export default ProjectCard;
