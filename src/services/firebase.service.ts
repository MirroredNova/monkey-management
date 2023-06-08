import { Blog } from '@/types/blogs';

export default class FirebaseService {
  static async fetchBlogData() {
    const response = await fetch(
      'https://monkey-management-37b20-default-rtdb.firebaseio.com/blogs.json'
    );

    if (!response.ok) {
      throw new Error('Could not fetch blog data');
    }

    const blogsData: Blog[] = [];
    Object.entries(await response.json()).forEach(([index, value]) => {
      blogsData.push({
        id: index,
        ...(value as Blog)
      } as Blog);
    });
    return blogsData;
  }

  static async postBlogData(formData: Blog) {
    const response = await fetch(
      'https://monkey-management-37b20-default-rtdb.firebaseio.com/blogs.json',
      {
        method: 'POST',
        body: JSON.stringify(formData)
      }
    );
    return response;
  }
}
