import React, { useState } from 'react';
import styles from './blogsForm.module.css';

const BlogForm = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data');
  };

  return (
    <div>
      <form className={styles.blogsForm} onSubmit={onSubmit}>
        <label>Title</label>
        <input placeholder="title" />
        <label>Content</label>
        <div>
          <button
            type={'button'}
            onClick={() => setNumParagraphs((prev) => prev + 1)}
          >
            Add Paragraph
          </button>
          <button
            type={'button'}
            onClick={() =>
              numParagraphs > 1 && setNumParagraphs((prev) => prev - 1)
            }
          >
            Remove Paragraph
          </button>
        </div>
        {Array.from({ length: numParagraphs }, (x, i) => (
          <div key={i}>
            <label>Paragraph {i + 1}</label>
            <input type="text" />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
