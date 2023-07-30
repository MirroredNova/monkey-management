import React from 'react';
import type { Metadata } from 'next';
import ProjectBanner from '@/components/projects/banner/banner';
import ProjectContent from '@/components/projects/content/content';
import { fetchProjectData } from '@/services/firebase.service';

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
  const projects = await fetchProjectData();
  const projIndex = projects.findIndex((proj) => proj.id === params.id);

  return (
    <div>
      {projects[projIndex] && (
        <>
          <ProjectBanner project={projects[projIndex]} />
          <ProjectContent
            project={projects[projIndex]}
            nextProjId={projects[projIndex - 1]?.id}
            prevProjId={projects[projIndex + 1]?.id}
          />
        </>
      )}
    </div>
  );
};

export default Project;
