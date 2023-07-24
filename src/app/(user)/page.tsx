import Banner from '@/components/home/banner/banner';
import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import Socials from '@/components/home/socials/socials';
import React from 'react';

const page = async () => (
  <div>
    <Banner />
    <Socials />
    <FeaturedPosts />
    <RecentPosts />
  </div>
);

export default page;
