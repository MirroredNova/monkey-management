import React from 'react';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.navbar}>
    <h1>Monkey Management</h1>
    <ul>
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
  </nav>
);

export default Nav;
