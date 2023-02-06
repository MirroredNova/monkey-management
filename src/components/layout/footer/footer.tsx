import Link from 'next/link';
import React from 'react';
import SiteTitle from '../siteTitle/siteTitle';
import styles from './footer.module.css';

const Footer = () => (
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
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div className={styles.form}>
        <p>Subscribe here and get the latest news!</p>
        <input placeholder="Email" />
        <button>Subscribe</button>
      </div>
      <div className={styles.tag}>
        <p>© 2023 Monkey Management. Created by Jacob Duchac</p>
      </div>
    </div>
  </div>
);

export default Footer;
