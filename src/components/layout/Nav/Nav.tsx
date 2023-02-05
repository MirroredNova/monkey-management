import Image from 'next/image';
import React from 'react';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.navBar}>
    <div className={styles.navTitle}>
      <div className={styles.navTitleSvg}>
        <a href="/">
          <Image src="/header.svg" alt="headerImage" width={50} height={50} />
        </a>
      </div>
      <div className={styles.navTitleHeader}>
        <a href="/">
          <span>Monkey Management</span>
        </a>
      </div>
    </div>
    <div>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
