import React from 'react';
import Image from 'next/image';
import styles from './aboutImage.module.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
};

const AboutImage = ({ content }: Props) => (
  <div className={styles.image}>
    <Image
      src={content.about.imageUrl}
      alt="Blog"
      width={600}
      height={600}
      unoptimized
    />
  </div>
);

export default AboutImage;
