import BlogService from '@/services/blog.service';
import React from 'react';
import { Post } from '@/types/blogs';
import styles from './times.module.css';

type Props = {
  blog: Post;
};

const Times = ({ blog }: Props) => (
  <div className={styles.timeContainer}>
    {blog.creationDate && BlogService.timeSince(new Date(blog?.creationDate))}{' '}
    &bull; {`${blog.readTime} min read`}
  </div>
);

export default Times;
