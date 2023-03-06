import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './projectCard.module.css';

const ProjectCard = () => (
  <div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <Image
        src="https://static.wixstatic.com/media/fc7570_a84477c4cee2493ba9ab249f2f47068b~mv2.jpg/v1/fill/w_509,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"
        alt="Desert Wildlife Conservation"
        width={509}
        height={403}
      />
    </div>
    <div className={styles.textContainer}>
      <h2>Desert Wildlife Conservation</h2>
      <p>
        This is placeholder text. To change this content, double-click on the
        element and click Change Content.
      </p>
      <Link href="/projects">Read More</Link>
    </div>
  </div>
);

export default ProjectCard;
