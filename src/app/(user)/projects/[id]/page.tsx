import React from 'react';
import type { Metadata } from 'next';
import ProjectBanner from '@/components/shared/postBanner/postBanner';
import ProjectContent from '@/components/projects/projectContent/projectContent';
import { fetchData } from '@/services/firebase.service';
import { PostTypes } from '@/types/posts';
import styles from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id
  };
}

const Project = async ({ params }: Props) => {
  const projects = await fetchData(PostTypes.Projects);
  const projIndex = projects.findIndex((proj) => proj.id === params.id);

  return (
    <>
      {projects[projIndex] && (
        <>
          <ProjectBanner object={projects[projIndex]} />
          <div className={styles.body}>
            <ProjectContent
              project={projects[projIndex]}
              nextProjId={projects[projIndex - 1]?.id}
              prevProjId={projects[projIndex + 1]?.id}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Project;
