import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import SiteTitle from '../siteTitle/siteTitle';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.navBar}>
    <SiteTitle />
    <div className={styles.searchBar}>
      <input placeholder="Search...." />
      <button type="button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
    <div>
      <ul className={styles.navList}>
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
          <Link href="/about">About Me</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
