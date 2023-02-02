import React from 'react';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.navbar}>
    <div>
      <h1>Monkey Management</h1>
    </div>
    <div>
      <ul className={styles.navlist}>
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
