import PageTitle from '@/components/layout/pageTitle/pageTitle';
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export const metadata = {
  title: 'About'
};

const page = () => (
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
          <h3>Hi, thanks for dropping by!</h3>
          <p>
            I{"'"}m a paragraph. Click here to add your own text and edit me. It
            {"'"}s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font. Feel free to drag and drop
            me anywhere you like on your page. I{"'"}m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <p>&nbsp;</p>
          <p>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default page;
