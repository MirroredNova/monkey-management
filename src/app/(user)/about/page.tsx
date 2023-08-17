import PageTitle from '@/components/shared/pageTitle/pageTitle';
import React from 'react';
import { fetchContentData } from '@/services/firebase.service';
import AboutImage from '@/components/about/aboutImage/aboutImage';
import AboutText from '@/components/about/aboutText/aboutText';
import styles from './styles.module.css';

export const metadata = {
  title: 'About'
};

const page = async () => {
  const content = await fetchContentData();

  return (
    <>
      <PageTitle>About Me</PageTitle>
      <div className={styles.content}>
        <AboutImage content={content} />
        <AboutText content={content} />
      </div>
    </>
  );
};

export default page;
