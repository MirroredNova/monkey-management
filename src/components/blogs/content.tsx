import React from 'react';
import { Blog } from '@/types/blogs';
import BlogService from '@/services/blog.service';
import Image from 'next/image';
import styles from './content.module.css';
import Author from '../layout/blogs/author';
import References from './references';
import ContentImages from './contentImages';

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
          {blog?.creationDate && (
            <Author
              agoText={BlogService.timeSince(new Date(blog?.creationDate))}
              readTime={blog.readTime}
            />
          )}
          <h3>{blog.subtext}</h3>
          {blog.content &&
            blog.content.map((content, index) => {
              if (content.type === 'text') {
                return <p key={index}>{content.data as string}</p>;
              }
              return (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_BLOGS_CONTENT_IMAGE_TRANSFORMATION}/${content.data}`}
                  alt={''}
                  width={1080}
                  height={1080}
                  unoptimized
                  className={styles.contentImage}
                />
              );
            })}
          {blog.contentImages && (
            <ContentImages imageUrls={blog.contentImages} />
          )}
          {blog.references && <References referencesList={blog.references} />}
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
