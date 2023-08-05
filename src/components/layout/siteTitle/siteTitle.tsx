import React from 'react';
import Image from 'next/image';
import styles from './siteTitle.module.css';

const SiteTitle = () => (
  <div className={styles.navTitle}>
    <div className={styles.navTitleSvg}>
      <a href="/">
        <Image
          src="/header.svg"
          alt="headerImage"
          width={50}
          height={50}
          unoptimized
        />
      </a>
    </div>
    <div className={styles.navTitleHeader}>
      <a href="/">
        <span>Monkey Management</span>
      </a>
    </div>
  </div>
);

export default SiteTitle;
