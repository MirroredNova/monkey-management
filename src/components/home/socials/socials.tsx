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
      <Link href={content.socials.twitter} target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href={content.socials.instagram} target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href={content.socials.youtube} target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link href={content.socials.tiktok} target="_blank">
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
    </>
  );
};

export default Socials;
