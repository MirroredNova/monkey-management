/* eslint-disable @next/next/no-img-element */

'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './contentImages.module.css';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1
  }
};

type Props = {
  imageUrls: string[];
};

const ContentImages = ({ imageUrls }: Props) => (
  <div className={styles.container}>
    <div>
      <h2>Image Gallery</h2>
    </div>
    <div className={styles.carouselContainer}>
      <Carousel responsive={responsive} infinite arrows swipeable>
        {imageUrls.map((url, index) => (
          <img
            key={`image-carousel-${index}`}
            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_BLOGS_CONTENT_IMAGE_TRANSFORMATION}/${url}`}
            alt={''}
          />
        ))}
      </Carousel>
    </div>
  </div>
);

export default ContentImages;
