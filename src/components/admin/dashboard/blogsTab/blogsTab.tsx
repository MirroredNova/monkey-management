import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';
import BlogsForm from '../../forms/blogForm/blogsForm';
import BlogsList from './blogsList';
import styles from './blogsTab.module.css';
import ProjectList from '../projectsTab/projectList';
import ModifyContentTab from '../modifyContentTab/modifyContentTab';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  new: <BlogsForm />,
  modifyContent: <ModifyContentTab />,
  existingBlogs: <BlogsList />,
  existingProjects: <ProjectList />
};

const BlogsTab = () => {
  const [activeTab, setActiveTab] = useLocalStorage('activeBlogsTab', 'new');
  const tab = tabMap[activeTab];

  return (
    <div>
      <ul className={styles.blogsNavList}>
        <li>
          <button onClick={() => setActiveTab('new')}>New Post</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('modifyContent')}>
            Modify Content
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('existingBlogs')}>
            Existing Blogs
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('existingProjects')}>
            Existing Projects
          </button>
        </li>
        <li>
          <Link href={'../'}>Site</Link>
        </li>
      </ul>
      <div className={styles.blogsContent}>{tab}</div>
    </div>
  );
};

export default BlogsTab;
