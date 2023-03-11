import PageTitle from '@/components/layout/pageTitle/pageTitle';
import ProjectCard from '@/components/projects/card/card';
import React from 'react';
import styles from './styles.module.css';

export const metadata = {
  title: 'Projects'
};

const page = () => (
  <div className={styles.projectContainer}>
    <PageTitle>Projects</PageTitle>
    <div className={styles.content}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
);

export default page;
