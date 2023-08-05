import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import styles from './author.module.css';

type Props = {
  agoText: string;
  readTime: number;
};

const Author = ({ agoText, readTime }: Props) => (
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dhhcxidye/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1685936711/cld-sample-5.jpg"
          width="1000"
          height="1000"
          alt="Author Image"
          unoptimized
        />
      </div>
      <div className={styles.textContainer}>
        <h3>Jacob Duchac</h3>
        <p>
          {agoText} &bull; {`${readTime} min read`}
        </p>
      </div>
    </div>
    <div className={styles.moreContainer}>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  </div>
);

export default Author;
