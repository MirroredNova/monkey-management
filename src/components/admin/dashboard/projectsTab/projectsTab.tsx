import React, { useState } from 'react';

const ProjectsTab = () => {
  const [activeTab, setActiveTab] = useState('existing');
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
      <div>{activeTab}</div>
    </div>
  );
};

export default ProjectsTab;
