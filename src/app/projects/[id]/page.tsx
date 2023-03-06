import React from 'react';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id
  };
}

const Project = ({ params }: Props) => <div>{params.id}</div>;

export default Project;
