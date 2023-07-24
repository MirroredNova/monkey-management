import { Blog } from '@/types/blogs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import styles from './recentBlog.module.css';

type Props = {
  blog?: Blog;
};

const RecentBlog = ({ blog }: Props) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image
        src="https://res.cloudinary.com/dhhcxidye/image/upload/v1685936710/cld-sample-2.jpg"
        alt="blog"
        width={1080}
        height={1080}
      />
    </div>
    <div className={styles.textContainer}>
      <h2>{blog?.title}</h2>
      <div className={styles.iconContainer}>
        <a>
          <FontAwesomeIcon icon={faComment as IconProp} />
          <span> 0</span>
        </a>
      </div>
    </div>
  </div>
);

export default RecentBlog;
