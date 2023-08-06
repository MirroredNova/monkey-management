import Banner from '@/components/home/banner/banner';
import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import Socials from '@/components/home/socials/socials';
import React from 'react';
import { fetchData } from '@/services/firebase.service';

const page = async () => {
  const blogData = await fetchData('blogs');

  return (
    <div>
      <Banner />
      <Socials />
      <FeaturedPosts blogData={blogData} />
      <RecentPosts blogData={blogData} />
    </div>
  );
};

export default page;
