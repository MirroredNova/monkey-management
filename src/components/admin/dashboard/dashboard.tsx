import React, { useState } from 'react';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  blogs: <div key="blogs">Blogs</div>,
  projects: <div key="projects">Projects</div>
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const tab = tabMap[activeTab];

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setActiveTab('blogs')}>Blogs</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('projects')}>Projects</button>
        </li>
      </ul>
      <div>{tab}</div>
    </div>
  );
};

export default Dashboard;
