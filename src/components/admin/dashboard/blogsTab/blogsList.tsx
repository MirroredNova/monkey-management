import { fetchData, deleteData } from '@/services/firebase.service';
import { Post } from '@/types/blogs';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './blogsList.module.css';

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Post[]>([]);

  useEffect(() => {
    fetchData('blogs').then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  const deleteBlog = useCallback((id: string | undefined) => {
    if (id) {
      deleteData(id, 'blogs').then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      });
    }
  }, []);

  return (
    <div>
      <ul className={styles.blogsList}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h1>{blog.title}</h1>
            <button onClick={() => deleteBlog(blog.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;
