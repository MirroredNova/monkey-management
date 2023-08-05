import { deleteBlogData, fetchBlogData } from '@/services/firebase.service';
import { Blog } from '@/types/blogs';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './blogsList.module.css';

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogData().then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  const deleteBlog = useCallback((id: string | undefined) => {
    if (id) {
      deleteBlogData(id).then(() => {
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
