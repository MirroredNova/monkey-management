import React from 'react';
import { Project } from '@/types/projects';
import styles from './content.module.css';

type Props = {
  project: Project;
  nextProjId: string | undefined;
  prevProjId: string | undefined;
};

const ProjectContent = ({ project, nextProjId, prevProjId }: Props) => {
  const prevUrl = prevProjId ? `/projects/${prevProjId}` : '/projects';
  const nextUrl = nextProjId ? `/projects/${nextProjId}` : '/projects';

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.content}>
          <a href="/projects">{'<'} Back</a>
          <h1>{project.title}</h1>
          <h3>{project.subtext}</h3>
          {project.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className={styles.buttons}>
            <a href={prevUrl}>Previous</a>
            <a href={nextUrl}>Next</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectContent;
