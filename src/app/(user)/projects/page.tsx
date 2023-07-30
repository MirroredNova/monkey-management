import PageTitle from '@/components/layout/pageTitle/pageTitle';
import ProjectCard from '@/components/projects/card/card';
import React from 'react';
import { fetchProjectData } from '@/services/firebase.service';
import Empty from '@/components/layout/empty/empty';
import styles from './styles.module.css';

export const metadata = {
  title: 'Projects'
};

const page = async () => {
  const blogData = await fetchProjectData();
  const isEmpty = blogData.length === 0;

  return (
    <div className={styles.projectContainer}>
      <PageTitle>Projects</PageTitle>
      <div className={isEmpty ? styles.emptyContent : styles.content}>
        {isEmpty ? (
          <Empty />
        ) : (
          blogData
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
        )}
      </div>
    </div>
  );
};

export default page;
