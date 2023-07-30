import React, { useMemo } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import styles from './dashboard.module.css';
import BlogsTab from './blogsTab/blogsTab';
import ProjectsTab from './projectsTab/projectsTab';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  blogs: <BlogsTab key="blogs" />,
  projects: <ProjectsTab key="projects" />
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useLocalStorage<string>(
    'activeTab',
    'blogs'
  );

  const tab = useMemo(() => tabMap[activeTab], [activeTab]);

  return (
    <div className={styles.dashboardContainer}>
      <ul className={styles.dashboardList}>
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
