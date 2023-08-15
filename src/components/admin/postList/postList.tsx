import React from 'react';
import { Post } from '@/types/blogs';
import styles from './postList.module.css';

type Props = {
  type: 'projects' | 'blogs';
  content: Post[];
  deleteBlog: (type: 'projects' | 'blogs', id: string | undefined) => void;
};

const PostList = ({ type, content, deleteBlog }: Props) => (
  <div>
    <ul className={styles.list}>
      {content.map((blog) => (
        <li key={blog.id}>
          <h1>{blog.title}</h1>
          <button onClick={() => deleteBlog(type, blog.id)}>delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
