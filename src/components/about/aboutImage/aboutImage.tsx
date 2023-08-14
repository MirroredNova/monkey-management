import React from 'react';
import Image from 'next/image';
import styles from './aboutImage.module.css';

const aboutImage = () => (
  <div className={styles.image}>
    <Image
      src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/crop/x_1646,y_0,w_3950,h_3840/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1145254743.jpg"
      alt="Blog"
      width={600}
      height={600}
      unoptimized
    />
  </div>
);

export default aboutImage;
