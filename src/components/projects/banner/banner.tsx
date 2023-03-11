import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';

const Banner = () => (
  <div className={styles.bannerContainer}>
    <Image
      alt="ProjectImageBanner"
      width={1920}
      height={600}
      src={
        'https://static.wixstatic.com/media/fc7570_178fe0f7c3d546d2813326f67d54e7a3~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc7570_178fe0f7c3d546d2813326f67d54e7a3~mv2.jpg'
      }
    />
  </div>
);

export default Banner;
