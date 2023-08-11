import PageTitle from '@/components/layout/pageTitle/pageTitle';
import ProjectCard from '@/components/projects/card/card';
import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Empty from '@/components/layout/empty/empty';
import styles from './styles.module.css';

export const metadata = {
  title: 'Projects'
};

const page = async () => {
  const projects = await fetchData('projects');
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
