import Banner from '@/components/home/banner/banner';
import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import Socials from '@/components/home/socials/socials';
import React from 'react';

export default function Projects() {
  return (
    <main>
      <Banner />
      <Socials />
      <FeaturedPosts />
      <RecentPosts />
    </main>
  );
}
