import Banner from '@/components/layout/banner/banner';
import FeaturedPosts from '@/components/layout/featured/featuredPosts';
import RecentPosts from '@/components/layout/recent/recentPosts';
import Socials from '@/components/layout/socials/socials';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Banner />
      <Socials />
      <FeaturedPosts />
      <RecentPosts />
    </main>
  );
}