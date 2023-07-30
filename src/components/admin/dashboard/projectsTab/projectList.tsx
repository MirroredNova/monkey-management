import React, { useCallback, useEffect, useState } from 'react';
import {
  deleteProjectData,
  fetchProjectData
} from '@/services/firebase.service';
import { Project } from '@/types/projects';
import styles from './projectList.module.css';

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjectData().then((projectsData) => {
      setProjects(projectsData);
    });
  }, []);

  const deleteProject = useCallback((id: string | undefined) => {
    if (id) {
      deleteProjectData(id).then(() => {
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
            {project.content?.map((p) => (
              <p key={Math.random()}>{p}</p>
            ))}
            <button onClick={() => deleteProject(project.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
