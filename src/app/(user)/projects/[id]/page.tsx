import React from 'react';
import type { Metadata } from 'next';
import ProjectBanner from '@/components/projects/banner/banner';
import ProjectContent from '@/components/projects/content/content';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id
  };
}

const Project = ({ params }: Props) => (
  <div>
    <ProjectBanner />
    <ProjectContent />
  </div>
);

export default Project;
