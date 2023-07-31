import React from 'react';
import { Blog } from '@/types/blogs';
import styles from './content.module.css';

type Props = {
  blog: Blog;
  nextBlogId: string | undefined;
  prevBlogId: string | undefined;
};

const BlogContent = ({ blog, nextBlogId, prevBlogId }: Props) => {
  const prevUrl = prevBlogId ? `/blogs/${prevBlogId}` : '/blogs';
  const nextUrl = nextBlogId ? `/blogs/${nextBlogId}` : '/blogs';

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.content}>
          <a href="/blogs">{'<'} Back</a>
          <h1>{blog.title}</h1>
          <h3>{blog.subtext}</h3>
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className={styles.buttons}>
            <a href={prevUrl}>Previous</a>
            <a href={nextUrl}>Next</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogContent;
