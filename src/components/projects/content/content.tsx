import React from 'react';
import { Post } from '@/types/blogs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './content.module.css';

type Props = {
  project: Post;
  nextProjId: string | undefined;
  prevProjId: string | undefined;
};

const ProjectContent = ({ project, nextProjId, prevProjId }: Props) => {
  const prevUrl = prevProjId ? `/projects/${prevProjId}` : '/projects';
  const nextUrl = nextProjId ? `/projects/${nextProjId}` : '/projects';

  return (
    <div className={styles.content}>
      <Link href="/projects">{'<'} Back</Link>
      <h1>{project.title}</h1>
      <h3>{project.subtext}</h3>
      {project.content &&
        project.content.map((content, index) => {
          if (content.type === 'text') {
            return <p key={index}>{content.data as string}</p>;
          }
          return (
            <Image
              key={index}
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_BLOGS_CONTENT_IMAGE_TRANSFORMATION}/${content.data}`}
              alt={''}
              width={1080}
              height={1080}
              unoptimized
              className={styles.contentImage}
            />
          );
        })}
      <div className={styles.buttons}>
        <Link href={prevUrl}>{'<'} Previous</Link>
        <Link href={nextUrl}>Next {'>'}</Link>
      </div>
    </div>
  );
};

export default ProjectContent;
