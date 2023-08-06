import PageTitle from '@/components/layout/pageTitle/pageTitle';
import React from 'react';
import Image from 'next/image';
import { fetchContentData } from '@/services/firebase.service';
import styles from './styles.module.css';

export const metadata = {
  title: 'About'
};

const page = async () => {
  const content = await fetchContentData();

  return (
    <div className={styles.aboutContainer}>
      <PageTitle>About Me</PageTitle>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/crop/x_1646,y_0,w_3950,h_3840/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1145254743.jpg"
            alt="Blog"
            width={600}
            height={600}
            unoptimized
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h3>{content.about.heading}</h3>
            {content.about.paragraphs.map(
              (paragraph: string, index: number) => (
                <>
                  <p key={index}>{paragraph}</p>
                  {index !== content.about.paragraphs.length - 1 && (
                    <p>&nbsp;</p>
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
