import React from 'react';

export const metadata = {
  title: 'Blogs'
};

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => <div>{params.id}</div>;

export default page;
