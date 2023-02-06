import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import styles from './socials.module.css';

const Socials = () => (
  <div className={styles.container}>
    <a href="/">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="/">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="/">
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="/">
      <FontAwesomeIcon icon={faTiktok} />
    </a>
  </div>
);

export default Socials;
