import { Blog } from '@/types/blogs';
import React, { useCallback, useState } from 'react';
import styles from './blogsForm.module.css';

const BlogForm = () => {
  const [formData, setFormData] = useState<Blog>({
    title: '',
    content: ['']
  });
  const [notification, setNotification] = useState('');

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      'https://monkey-management-37b20-default-rtdb.firebaseio.com/blogs.json',
      {
        method: 'POST',
        body: JSON.stringify(formData)
      }
    );

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
        <label>Content</label>
        <div>
          <button
            type="button"
            data-value="increment"
            onClick={changeParagraphCount}
          >
            Add Paragraph
          </button>
          <button
            type="button"
            data-value="decrement"
            onClick={changeParagraphCount}
          >
            Remove Paragraph
          </button>
        </div>
        {formData.content.map((x, i) => (
          <div key={i} className={styles.blogContentContainer}>
            <label>Paragraph {i + 1}</label>
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
