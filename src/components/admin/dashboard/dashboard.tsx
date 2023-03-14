import React, { useState } from 'react';
import BlogsTab from './blogsTab/blogsTab';
import ProjectsTab from './projectsTab/projectsTab';
import styles from './dashboard.module.css';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  blogs: <BlogsTab key="blogs" />,
  projects: <ProjectsTab key="projects" />
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const tab = tabMap[activeTab];

  return (
    <div className={styles.dashboardContainer}>
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
