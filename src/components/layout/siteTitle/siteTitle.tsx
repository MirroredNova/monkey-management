import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './siteTitle.module.css';

const SiteTitle = () => (
  <div className={styles.navTitle}>
    <div className={styles.navTitleSvg}>
      <Link href="/">
        <Image
          src="/header.svg"
          alt="headerImage"
          width={50}
          height={50}
          unoptimized
        />
      </Link>
    </div>
    <div className={styles.navTitleHeader}>
      <Link href="/">
        <span>Monkey Management</span>
      </Link>
    </div>
  </div>
);

export default SiteTitle;
