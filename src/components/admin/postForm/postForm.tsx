import CloudinaryService from '@/services/cloudinary.service';
import { postFormData } from '@/services/firebase.service';
import { Post, PostContent, PostTypes } from '@/types/posts';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  BlogForm as BlogFormFields,
  ProjectForm as ProjectFormFields
} from '@/constants/forms';
import styles from './postForm.module.css';

const radioOptions = ['text', 'img', 'header'];
const creationTypeRadioOptions = Object.values(PostTypes).filter((v) =>
  Number.isNaN(Number(v))
);

const PostForm = () => {
  const [formData, setFormData] = useState<Post>({
    title: '',
    readTime: 0,
    subtext: '',
    coverImage: ''
  });
  const [notification, setNotification] = useState('');
  const [coverImage, setCoverImage] = useState<File | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [contentImages, setContentImages] = useState<File[]>([] as File[]);
  const [references, setReferences] = useState<string[]>([]);
  const [contentList, setContentList] = useState<string[]>([]);
  const [content, setContent] = useState<(string | File)[]>([]);
  const [selectedFormType, setSelectedFormType] = useState<string>(
    creationTypeRadioOptions[0]
  );
  const [selectedContent, setSelectedContent] = useState<string>(
    radioOptions[0]
  );
  const [newHeaderSize, setNewHeaderSize] = useState<number>(3);

  const notDisabledFields = useMemo(
    () =>
      selectedFormType === PostTypes.Blogs ? BlogFormFields : ProjectFormFields,
    [selectedFormType]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeReference = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (!index) return;
    setReferences((prev) => {
      const updatedContent = [...prev];
      updatedContent[+index] = e.target.value;
      return updatedContent;
    });
  };

  const onTextContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (!index) return;
    setContent((prev) => {
      const updatedContent = [...prev];
      updatedContent[+index] = e.target.value;
      return updatedContent;
    });
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.getAttribute('data-image');
    if (type === 'coverImage') {
      const file = e.target.files?.[0];
      if (!file) return;
      setCoverImage(file);
    }
    if (type === 'contentImage') {
      const { files } = e.target;
      if (!files) return;
      setContentImages(Array.from(files));
    }
    if (type === 'singleImage') {
      const index = e.currentTarget.getAttribute('data-index');
      const file = e.target.files?.[0];
      if (!file || !index) return;
      setContent((prev) => {
        const updatedContent = [...prev];
        updatedContent[+index] = file;
        return updatedContent;
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // HANDLE IMAGES
    if (!coverImage) return;
    const coverImageUrl = await CloudinaryService.uploadImage(coverImage);
    const contentImagesUrl = await Promise.all(
      contentImages.map((image) => CloudinaryService.uploadImage(image))
    );
    formData.contentImages = contentImagesUrl;
    formData.coverImage = coverImageUrl;

    // HANDLE CONTENT
    if (content.length > 0) {
      const contentData = content.map(async (x, i) => {
        const type = contentList[i];
        if (typeof x === 'string') return { type, data: x } as PostContent;
        return { type, data: await CloudinaryService.uploadImage(x) };
      });
      const contentDataUrl = await Promise.all(contentData);
      formData.content = contentDataUrl;
    }

    // HANDLE REFERENCES
    if (references.length > 0) formData.references = references;

    // SUBMIT FORM
    const response = await postFormData(formData, selectedFormType);

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

    // RESET FORM
    setFormData({
      title: '',
      readTime: 0,
      subtext: '',
      coverImage: ''
    });
    setCoverImage(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setContentImages([]);
    setContentList([]);
    setContent([]);
    setReferences([]);
  };

  const changeContentCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const val = e.currentTarget.getAttribute('data-value');
      const index = e.currentTarget.getAttribute('data-index');
      if (val === 'increment') {
        if (selectedContent === 'text') {
          setContentList((prev) => [...prev, 'text']);
          setContent((prev) => [...prev, '']);
        } else if (selectedContent === 'img') {
          setContentList((prev) => [...prev, 'img']);
          setContent((prev) => [...prev, '']);
        } else if (selectedContent === 'header') {
          setContentList((prev) => [...prev, `h${newHeaderSize}`]);
          setContent((prev) => [...prev, '']);
        }
      }
      if (val === 'remove' && index) {
        setContentList((prev) => prev.filter((_, i) => i !== +index));
        setContent((prev) => prev.filter((_, i) => i !== +index));
      }
    },
    [newHeaderSize, selectedContent]
  );

  return (
    <div>
      <form className={styles.blogsForm} onSubmit={onSubmit}>
        {notification && <h1>{notification}</h1>}
        <div className={styles.mainContentContainer}>
          <div>
            {creationTypeRadioOptions.map((x, index) => (
              <span key={index}>
                <input
                  type="radio"
                  id={x}
                  name="form_type"
                  value={x}
                  checked={selectedFormType === x}
                  onChange={(e) => setSelectedFormType(e.target.value)}
                />
                <label htmlFor={x}>{x}</label>
              </span>
            ))}
          </div>
          <h1>Main Body Information</h1>
          <label>Title</label>
          <input
            placeholder="title"
            value={formData.title}
            onChange={onChange}
            name="title"
            required
            disabled={!notDisabledFields.title}
          />
          <label>Read Time</label>
          <input
            placeholder="readTime"
            type="number"
            value={formData.readTime}
            onChange={onChange}
            name="readTime"
            required
            disabled={!notDisabledFields.readTime}
          />
          <label>Subtext</label>
          <input
            placeholder="subtext"
            value={formData.subtext}
            onChange={onChange}
            name="subtext"
            required
            disabled={!notDisabledFields.subtext}
          />
          <label>Cover Image</label>
          <input
            onChange={onImageChange}
            name="image"
            required
            type="file"
            data-image="coverImage"
            ref={fileInputRef}
            disabled={!notDisabledFields.coverImage}
          />
        </div>
        <div className={styles.contentContainer}>
          <h1>Content Section</h1>
          <label>Content Images</label>
          <input
            type="file"
            multiple
            data-image="contentImage"
            onChange={onImageChange}
            name="contentImage"
            disabled={!notDisabledFields.contentImages}
          />
          <label>Content</label>
          <div>
            {radioOptions.map((x, index) => (
              <span key={index}>
                <input
                  type="radio"
                  id={x}
                  name="content_type"
                  value={x}
                  checked={selectedContent === x}
                  onChange={(e) => setSelectedContent(e.target.value)}
                  disabled={!notDisabledFields.content}
                />
                <label htmlFor={x}>{x}</label>
              </span>
            ))}
            <button
              type="button"
              data-value="increment"
              onClick={changeContentCount}
              disabled={!notDisabledFields.content}
            >
              Add
            </button>
          </div>
          {selectedContent === 'header' && (
            <div>
              <label htmlFor="headerSize">Header Size (1-6)</label>
              <input
                id="headerSize"
                type="number"
                min={1}
                max={6}
                value={newHeaderSize}
                onChange={(e) => setNewHeaderSize(+e.target.value)}
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
          )}
          <div>
            {contentList.map((x, i) => (
              <div key={i} className={styles.blogContentContainer}>
                {x === 'text' && (
                  <>
                    <div>
                      <label>Paragraph {i + 1}</label>
                      <button
                        type="button"
                        data-value="remove"
                        data-index={i}
                        onClick={changeContentCount}
                      >
                        Delete
                      </button>
                    </div>
                    <textarea
                      placeholder={`Enter text for paragraph ${i + 1}`}
                      rows={6}
                      data-index={i}
                      required
                      onChange={onTextContentChange}
                    />
                  </>
                )}
                {x === 'img' && (
                  <>
                    <div>
                      <label>Image {i + 1}</label>
                      <button
                        type="button"
                        data-value="remove"
                        data-index={i}
                        onClick={changeContentCount}
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      name="image"
                      required
                      type="file"
                      data-index={i}
                      data-image="singleImage"
                      onChange={onImageChange}
                    />
                  </>
                )}
                {/^h[1-6]$/.test(x) && (
                  <>
                    <div>
                      <label>Header {i + 1}</label>
                      <button
                        type="button"
                        data-value="remove"
                        data-index={i}
                        onClick={changeContentCount}
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      name="headerText"
                      required
                      type="text"
                      data-index={i}
                      onChange={onTextContentChange}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>References</h1>
          <div>
            <button
              type="button"
              onClick={() => setReferences((prev) => [...prev, ''])}
              disabled={!notDisabledFields.references}
            >
              Add Reference
            </button>
          </div>
          {references.map((x, i) => (
            <div key={i} className={styles.referencesContainer}>
              <div>
                <label>Reference {i + 1}</label>
                <button
                  type="button"
                  onClick={() =>
                    setReferences((prev) =>
                      prev.filter((_, index) => index !== i)
                    )
                  }
                >
                  Delete
                </button>
              </div>
              <input
                placeholder={`reference ${i + 1}`}
                type="text"
                data-index={i}
                value={references[i]}
                onChange={onChangeReference}
                disabled={!notDisabledFields.references}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
