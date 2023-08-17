import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { fetchContentData } from '@/services/firebase.service';
import Socials from '../socials/socials';
import styles from './homeBanner.module.css';

const HomeBanner = async () => {
  const content = await fetchContentData();

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <video src={'/bannerVideo.mp4'} autoPlay loop muted />
      </div>
      <div className={styles.bannerWelcome}>
        <Link href="/about">
          <div className={styles.bannerWelcomeImage}>
            <Image
              src={content.banner.imageUrl}
              alt="Blog"
              width={144}
              height={144}
              unoptimized
            />
          </div>
          <h2>{content.banner.header}</h2>
          <p>{content.banner.subheader}</p>
        </Link>
        <div className={styles.bannerSocials}>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
