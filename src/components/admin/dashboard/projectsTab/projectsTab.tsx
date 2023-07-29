import React, { useState } from 'react';
import ProjectForm from '../../forms/projectForm/projectForm';
import ProjectList from './projectList';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  new: <ProjectForm />,
  existing: <ProjectList />
};

const ProjectsTab = () => {
  const [activeTab, setActiveTab] = useState('existing');
  const tab = tabMap[activeTab];
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setActiveTab('existing')}>
            Existing Projects
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('new')}>New Project</button>
        </li>
      </ul>
      <div>{tab}</div>
    </div>
  );
};

export default ProjectsTab;
