import React from 'react';
import { Post } from '@/types/blogs';
import BlogService from '@/services/blog.service';
import Image from 'next/image';
import Link from 'next/link';
import styles from './content.module.css';
import Author from '../layout/blogs/author';
import References from './references';
import ContentImages from './contentImages';

type Props = {
  blog: Post;
  nextBlogId: string | undefined;
  prevBlogId: string | undefined;
};

const BlogContent = ({ blog, nextBlogId, prevBlogId }: Props) => {
  const prevUrl = prevBlogId ? `/blogs/${prevBlogId}` : '/blogs';
  const nextUrl = nextBlogId ? `/blogs/${nextBlogId}` : '/blogs';

  return (
    <div className={styles.content}>
      <Link href="/blogs">{'<'} Back</Link>
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
      {blog.contentImages && <ContentImages imageUrls={blog.contentImages} />}
      {blog.references && <References referencesList={blog.references} />}
      <div className={styles.buttons}>
        <Link href={prevUrl}>{'<'} Previous</Link>
        <Link href={nextUrl}>Next {'>'}</Link>
      </div>
    </div>
  );
};

export default BlogContent;
