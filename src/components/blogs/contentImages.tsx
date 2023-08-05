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
  <div className={styles.carouselContainer}>
    <div>
      <h2>Image Gallery</h2>
    </div>
    <Carousel responsive={responsive} arrows infinite swipeable>
      {imageUrls.map((url, index) => (
        <Image
          key={`image-carousel-${index}`}
          unoptimized
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_BLOGS_CONTENT_IMAGE_TRANSFORMATION}/${url}`}
          alt={''}
          width={1080}
          height={1080}
        />
      ))}
    </Carousel>
  </div>
);

export default ContentImages;
