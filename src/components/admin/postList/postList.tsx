import React from 'react';
import { Post, PostTypes } from '@/types/blogs';
import styles from './postList.module.css';

type Props = {
  type: PostTypes;
  content: Post[];
  deleteBlog: (type: PostTypes, id: string | undefined) => void;
};

const PostList = ({ type, content, deleteBlog }: Props) => (
  <ul className={styles.list}>
    {content.map((blog) => (
      <li key={blog.id}>
        <h1>{blog.title}</h1>
        <button onClick={() => deleteBlog(type, blog.id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default PostList;
