import FirebaseService from '@/services/firebase.service';
import { Blog } from '@/types/blogs';
import React, { useCallback, useState } from 'react';
import styles from './blogsForm.module.css';

const BlogForm = () => {
  const [formData, setFormData] = useState<Blog>({
    title: '',
    content: ['']
  });
  const [notification, setNotification] = useState('');
  const [coverImage, setCoverImage] = useState<File | undefined>(undefined);
  const [contentImages, setContentImages] = useState<File[] | undefined>(
    undefined
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (!index) return;
    setFormData((prev) => {
      const updatedContent = [...prev.content];
      updatedContent[+index] = e.target.value;
      return { ...prev, content: updatedContent };
    });
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.getAttribute('data-image');
    if (type === 'coverImage') {
      const file = e.target.files?.[0];
      if (!file) return;
      setCoverImage(file);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await FirebaseService.postBlogData(formData);

    if (!response.ok) {
      setNotification('Something went Wrong');
      setTimeout(() => {
        setNotification('');
      }, 5000);
      throw new Error('Something went wrong!');
    } else {
      setNotification('Successful');
      setTimeout(() => {
        setNotification('');
      }, 3 * 1000);
    }

    setFormData({
      title: '',
      content: ['']
    });
  };

  const changeParagraphCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const val = e.currentTarget.getAttribute('data-value');
      const index = e.currentTarget.getAttribute('data-index');
      if (val === 'increment') {
        setFormData((prev) => ({
          ...prev,
          content: [...prev.content, '']
        }));
      }
      if (val === 'decrement') {
        setFormData((prev) => {
          if (prev.content.length <= 1) return { ...prev };
          return {
            ...prev,
            content: [...prev.content.filter((_, i, a) => i !== a.length - 1)]
          };
        });
      }
      if (val === 'remove' && index) {
        setFormData((prev) => {
          const updatedContent = [...prev.content];
          updatedContent.splice(+index, 1);
          return { ...prev, content: updatedContent };
        });
      }
    },
    []
  );

  return (
    <div>
      <form className={styles.blogsForm} onSubmit={onSubmit}>
        {notification && <h1>{notification}</h1>}
        <label>Title</label>
        <input
          placeholder="title"
          value={formData.title}
          onChange={onChange}
          name="title"
          required
        />
        <input
          onChange={onImageChange}
          name="image"
          required
          type="file"
          data-image="coverImage"
        />
        <label>Content</label>
        <div>
          <button
            type="button"
            data-value="increment"
            onClick={changeParagraphCount}
          >
            Add Paragraph
          </button>
        </div>
        {formData.content.map((x, i) => (
          <div key={i} className={styles.blogContentContainer}>
            <div>
              <label>Paragraph {i + 1}</label>
              <button
                type="button"
                data-value="remove"
                data-index={i}
                onClick={changeParagraphCount}
              >
                Delete
              </button>
            </div>
            <textarea
              placeholder={`Enter text for paragraph ${i + 1}`}
              rows={6}
              data-index={i}
              value={formData.content[i]}
              onChange={onChangeContent}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
