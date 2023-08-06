import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { fetchContentData } from '@/services/firebase.service';

const Socials = async () => {
  const content = await fetchContentData();

  return (
    <>
      <Link href={content.socials.twitter}>
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href={content.socials.instagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href={content.socials.youtube}>
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link href={content.socials.tiktok}>
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
    </>
  );
};

export default Socials;
