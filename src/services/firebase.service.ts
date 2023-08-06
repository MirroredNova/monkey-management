import { Post } from '@/types/blogs';
import { cache } from 'react';

//* ******************************//
//  BLOG DATA FUNCTIONS ******** //
//* ****************************//

export const fetchBlogData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}blogs.json`,
    {
      next: { revalidate: 30 }
    }
  );

  if (!response.ok) {
    throw new Error('Could not fetch blog data');
  }

  const blogsData: Post[] = [];
  const data = await response.json();
  if (!data) {
    return blogsData;
  }
  Object.entries(data).forEach(([index, value]) => {
    blogsData.push({
      id: index,
      ...(value as Post)
    } as Post);
  });
  return blogsData;
};

export const postFormData = async (formData: Post, type: string) => {
  const newForm = formData;
  newForm.creationDate = Date.now();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}${type}.json`,
    {
      method: 'POST',
      body: JSON.stringify(newForm)
    }
  );
  return response;
};

export const deleteBlogData = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}blogs/${id}.json`,
    {
      method: 'DELETE'
    }
  );
  return response;
};

//* ******************************//
//  PROJECT DATA FUNCTIONS ***** //
//* ****************************//

export const fetchProjectData = cache(async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}projects.json`,
    {
      next: { revalidate: 30 }
    }
  );

  if (!response.ok) {
    throw new Error('Could not fetch project data');
  }

  const projectData: Post[] = [];
  const data = await response.json();
  if (!data) {
    return projectData;
  }
  Object.entries(data).forEach(([index, value]) => {
    projectData.push({
      id: index,
      ...(value as Post)
    } as Post);
  });
  return projectData;
});

export const deleteProjectData = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}projects/${id}.json`,
    {
      method: 'DELETE'
    }
  );
  return response;
};
