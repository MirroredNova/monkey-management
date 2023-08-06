import React, { useCallback, useEffect, useState } from 'react';
import { deleteData, fetchData } from '@/services/firebase.service';
import { Post } from '@/types/blogs';
import styles from './projectList.module.css';

const ProjectList = () => {
  const [projects, setProjects] = useState<Post[]>([]);

  useEffect(() => {
    fetchData('projects').then((projectsData) => {
      setProjects(projectsData);
    });
  }, []);

  const deleteProject = useCallback((id: string | undefined) => {
    if (id) {
      deleteData(id, 'projects').then(() => {
        setProjects((prevProjects) =>
          prevProjects.filter((proj) => proj.id !== id)
        );
      });
    }
  }, []);

  return (
    <div>
      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li key={project.id}>
            <h1>{project.title}</h1>
            <button onClick={() => deleteProject(project.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
