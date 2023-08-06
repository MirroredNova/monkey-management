import Banner from '@/components/home/banner/banner';
import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import Socials from '@/components/home/socials/socials';
import React from 'react';
import { fetchData } from '@/services/firebase.service';
import styles from './styles.module.css';

const page = async () => {
  const blogData = await fetchData('blogs');

  return (
    <div>
      <Banner />
      <div className={styles.socialsContainer}>
        <Socials />
      </div>
      <section>
        <FeaturedPosts blogData={blogData} />
      </section>
      <section>
        <RecentPosts blogData={blogData} />
      </section>
    </div>
  );
};

export default page;
