import { Blog } from '@/types/blogs';
import { Project } from '@/types/projects';
import { cache } from 'react';

export const fetchBlogData = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_BLOG_URL, {
    next: { revalidate: 30 }
  });

  if (!response.ok) {
    throw new Error('Could not fetch blog data');
  }

  const blogsData: Blog[] = [];
  const data = await response.json();
  if (!data) {
    return blogsData;
  }
  Object.entries(data).forEach(([index, value]) => {
    blogsData.push({
      id: index,
      ...(value as Blog)
    } as Blog);
  });
  return blogsData;
};

export const postBlogData = async (formData: Blog) => {
  const newForm = formData;
  newForm.creationDate = Date.now();
  const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_BLOG_URL, {
    method: 'POST',
    body: JSON.stringify(newForm)
  });
  return response;
};

export const fetchProjectData = cache(async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_PROJECTS_URL);

  if (!response.ok) {
    throw new Error('Could not fetch project data');
  }

  const projectData: Project[] = [];
  const data = await response.json();
  if (!data) {
    return projectData;
  }
  Object.entries(data).forEach(([index, value]) => {
    projectData.push({
      id: index,
      ...(value as Project)
    } as Project);
  });
  return projectData;
});

export const postProjectData = async (formData: Project) => {
  const newForm = formData;
  newForm.creationDate = Date.now();
  const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_PROJECTS_URL, {
    method: 'POST',
    body: JSON.stringify(newForm)
  });
  return response;
};
