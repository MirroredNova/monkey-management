import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './banner.module.css';

const Banner = () => (
  <section>
    <div className={styles.bannerContainer}>
      <video src={'/bannerVideo.mp4'} autoPlay loop muted />
    </div>
    <div className={styles.bannerWelcome}>
      <Link href="/about">
        <div className={styles.bannerWelcomeImage}>
          <Image
            src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/crop/x_1646,y_0,w_3950,h_3840/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1145254743.jpg"
            alt="Blog"
            width={144}
            height={144}
            unoptimized
          />
        </div>
        <h2>Welcome!</h2>
        <p>Join my journey</p>
      </Link>
    </div>
  </section>
);

export default Banner;
