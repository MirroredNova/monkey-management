import React from 'react';
import styles from './banner.module.css';

const Banner = () => (
  <section>
    <div className={styles.bannerContainer}>
      <video src={'/bannerVideo.mp4'} autoPlay loop muted />
    </div>
  </section>
);

export default Banner;
