import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Empty from '@/components/shared/empty/empty';
import PageTitle from '@/components/shared/pageTitle/pageTitle';
import ProjectCard from '@/components/projects/projectCard/projectCard';
import { PostTypes } from '@/types/blogs';
import styles from './styles.module.css';

export const metadata = {
  title: 'Projects'
};

const page = async () => {
  const projects = await fetchData(PostTypes.Projects);
  const isEmpty = projects.length === 0;

  return (
    <>
      <PageTitle>Projects</PageTitle>
      <div className={isEmpty ? styles.emptyContent : styles.content}>
        {isEmpty ? (
          <Empty />
        ) : (
          projects
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
        )}
      </div>
    </>
  );
};

export default page;
