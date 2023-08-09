import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Banner from '@/components/home/banner/banner';
import Socials from '@/components/home/socials/socials';
import styles from './page.module.css';

const page = async () => {
  const blogData = await fetchData('blogs');

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.socialsContainer}>
        <Socials />
      </div>
      <div className={styles.body}>
        <FeaturedPosts blogData={blogData} />
        <RecentPosts blogData={blogData} />
      </div>
    </div>
  );
};

export default page;
