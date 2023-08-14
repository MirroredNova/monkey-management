'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SiteTitle from '../../shared/siteTitle/siteTitle';
import styles from './nav.module.css';
import OutsideClickListener from './outsideClickHandler';

const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const toggleNavOpen = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  const closeComponent = () => {
    setNavOpen(false);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navBar}>
        <SiteTitle />
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
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className={styles.navHamburger}>
            <button
              className="icon"
              onClick={toggleNavOpen}
              id="hamburgerButton"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className={styles.navHamburgerContainer}>
          <OutsideClickListener
            onOutsideClick={closeComponent}
            exceptionElementId={'hamburgerButton'}
          >
            <ul className={styles.navHamburgerList}>
              <li>
                <Link href="/" onClick={closeComponent}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={closeComponent}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeComponent}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeComponent}>
                  About
                </Link>
              </li>
            </ul>
          </OutsideClickListener>
        </div>
      )}
    </nav>
  );
};

export default Nav;
