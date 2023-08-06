import { Post } from '@/types/blogs';

//* ******************************//
//  DATA FUNCTIONS ************* //
//* ****************************//

export const fetchData = async (type: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}${type}.json`,
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

export const deleteData = async (id: string, type: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}${type}/${id}.json`,
    {
      method: 'DELETE'
    }
  );
  return response;
};

//* ****************************//
//  CONTENT FUNCTIONS ******** //
//* **************************//

export const fetchContentData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_URL}content.json`,
    {
      next: { revalidate: 30 }
    }
  );

  if (!response.ok) {
    throw new Error('Could not fetch blog data');
  }

  return response.json();
};
