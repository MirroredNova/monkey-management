import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  twitterLink,
  youtubeLink,
  instagramLink,
  tiktokLink
} from '@/constants/constants';
import styles from './socials.module.css';

const Socials = () => (
  <div className={styles.container}>
    <a href={twitterLink}>
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href={instagramLink}>
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href={youtubeLink}>
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href={tiktokLink}>
      <FontAwesomeIcon icon={faTiktok} />
    </a>
  </div>
);

export default Socials;
