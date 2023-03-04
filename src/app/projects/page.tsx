import PageTitle from '@/components/layout/pageTitle/pageTitle';
import ProjectCard from '@/components/projects/projectCard/projectCard';
import React from 'react';
import styles from './styles.module.css';

const page = () => (
  <div className={styles.projectContainer}>
    <PageTitle>Projects</PageTitle>
    <div className={styles.content}>
      <ProjectCard />
    </div>
  </div>
);

export default page;
