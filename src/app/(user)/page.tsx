import React from 'react';
import { fetchData } from '@/services/firebase.service';
import Banner from '@/components/home/homeBanner/homeBanner';
import RecentPosts from '@/components/home/recentBlog/recentBlog';
import Socials from '@/components/home/socials/socials';
import FeaturedBlogs from '@/components/home/featuredBlog/featuredBlog';
import { PostTypes } from '@/types/blogs';
import styles from './page.module.css';

const page = async () => {
  const blogData = await fetchData(PostTypes.Blogs);

  return (
    <>
      <Banner />
      <div className={styles.socialsContainer}>
        <Socials />
      </div>
      <div className={styles.body}>
        <FeaturedBlogs blogData={blogData} />
        <RecentPosts blogData={blogData} />
      </div>
    </>
  );
};

export default page;
