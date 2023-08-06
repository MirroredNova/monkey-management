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
import Link from 'next/link';
import styles from './socials.module.css';

const Socials = () => (
  <div className={styles.container}>
    <Link href={twitterLink}>
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
    <Link href={instagramLink}>
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
    <Link href={youtubeLink}>
      <FontAwesomeIcon icon={faYoutube} />
    </Link>
    <Link href={tiktokLink}>
      <FontAwesomeIcon icon={faTiktok} />
    </Link>
  </div>
);

export default Socials;
