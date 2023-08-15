import React, { useCallback, useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';
import {
  fetchData,
  deleteData,
  fetchContentData
} from '@/services/firebase.service';
import { Post } from '@/types/blogs';
import styles from './dashboard.module.css';
import PostForm from '../postForm/postForm';
import PostList from '../postList/postList';
import ModifyContentForm from '../modifyContentForm/modifyContentForm';

type TabMap = {
  [key: string]: JSX.Element;
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useLocalStorage('activeBlogsTab', 'new');
  const [projects, setProjects] = useState<Post[]>([]);
  const [blogs, setBlogs] = useState<Post[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contentData, setContentData] = React.useState<any>(null);

  useEffect(() => {
    fetchData('projects').then((projectsData) => {
      setProjects(projectsData);
    });
    fetchData('blogs').then((blogsData) => {
      setBlogs(blogsData);
    });
    fetchContentData().then((data) => setContentData(data));
  }, []);

  const deletePost = useCallback(
    (type: 'projects' | 'blogs', id: string | undefined) => {
      if (id) {
        deleteData(id, type).then(() => {
          setProjects((prev) => prev.filter((proj) => proj.id !== id));
        });
      }
    },
    []
  );

  const tabMap: TabMap = {
    new: <PostForm />,
    modifyContent: contentData && <ModifyContentForm data={contentData} />,
    existingBlogs: (
      <PostList type={'blogs'} content={blogs} deleteBlog={deletePost} />
    ),
    existingProjects: (
      <PostList type={'projects'} content={projects} deleteBlog={deletePost} />
    )
  };

  const tab = tabMap[activeTab];

  return (
    <div className={styles.dashboardContainer}>
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
    </div>
  );
};

export default Dashboard;
