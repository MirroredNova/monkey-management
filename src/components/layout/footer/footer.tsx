import Link from 'next/link';
import React from 'react';
import { fetchContentData } from '@/services/firebase.service';
import SiteTitle from '../../shared/siteTitle/siteTitle';
import styles from './footer.module.css';

const Footer = async () => {
  const content = await fetchContentData();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.title}>
          <SiteTitle />
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.tag}>
        <p>{content.footer.note}</p>
      </div>
    </div>
  );
};

export default Footer;
