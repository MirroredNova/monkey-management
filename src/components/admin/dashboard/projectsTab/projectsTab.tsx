import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import ProjectForm from '../../forms/projectForm/projectForm';
import ProjectList from './projectList';
import styles from './projectsTab.module.css';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  new: <ProjectForm />,
  existing: <ProjectList />
};

const ProjectsTab = () => {
  const [activeTab, setActiveTab] = useLocalStorage(
    'activeProjectsTab',
    'existing'
  );
  const tab = tabMap[activeTab];
  return (
    <div>
      <ul className={styles.projectsNavList}>
        <li>
          <button onClick={() => setActiveTab('existing')}>
            Existing Projects
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('new')}>New Project</button>
        </li>
      </ul>
      <div className={styles.projectsContent}>{tab}</div>
    </div>
  );
};

export default ProjectsTab;
