import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import BlogsForm from '../../forms/blogForm/blogsForm';
import BlogsList from './blogsList';
import styles from './blogsTab.module.css';

type TabMap = {
  [key: string]: JSX.Element;
};

const tabMap: TabMap = {
  new: <BlogsForm />,
  existing: <BlogsList />
};

const BlogsTab = () => {
  const [activeTab, setActiveTab] = useLocalStorage(
    'activeBlogsTab',
    'existing'
  );
  const tab = tabMap[activeTab];

  return (
    <div>
      <ul className={styles.blogsNavList}>
        <li>
          <button onClick={() => setActiveTab('existing')}>
            Existing Blogs
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('new')}>New Blog</button>
        </li>
      </ul>
      <div className={styles.blogsContent}>{tab}</div>
    </div>
  );
};

export default BlogsTab;
