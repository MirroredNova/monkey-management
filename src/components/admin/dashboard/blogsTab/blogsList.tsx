import FirebaseService from '@/services/firebase.service';
import { Blog } from '@/types/blogs';
import React, { useState, useEffect } from 'react';
import styles from './blogsList.module.css';

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    FirebaseService.fetchBlogData().then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  return (
    <div>
      <ul className={styles.blogsList}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h1>{blog.title}</h1>
            {blog.content.map((p) => (
              <p key={Math.random()}>{p}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;
