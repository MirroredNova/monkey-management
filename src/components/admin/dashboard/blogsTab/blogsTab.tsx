import React, { useState } from 'react';
import BlogForm from '../../forms/blogForm/blogsForm';
import styles from './blogsTab.module.css';

const BlogsTab = () => {
  const [activeTab, setActiveTab] = useState('new');
  return (
    <div className={styles.blogsContainer}>
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
      <div>{activeTab === 'new' && <BlogForm />}</div>
    </div>
  );
};

export default BlogsTab;
