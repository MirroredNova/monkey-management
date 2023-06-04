import { Blog } from '@/types/blogs';
import React, { useState, useEffect } from 'react';
import styles from './blogsList.module.css';

const fetchData = async () => {
  const response = await fetch(
    'https://monkey-management-37b20-default-rtdb.firebaseio.com/blogs.json'
  );

  if (!response.ok) {
    throw new Error('Could not fetch cart data');
  }

  const blogsData: Blog[] = [];
  Object.entries(await response.json()).forEach(([index, value]) => {
    blogsData.push({
      id: index,
      ...(value as Blog)
    } as Blog);
  });
  return blogsData;
};

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchData().then((blogsData) => {
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
