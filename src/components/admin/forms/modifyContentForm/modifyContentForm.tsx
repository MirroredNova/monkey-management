/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { postContentData } from '@/services/firebase.service';
import React, { useState } from 'react';
import styles from './modifyContentForm.module.css';

interface FormProps {
  data: any;
}

const handleTextareaInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
  const textarea = event.currentTarget;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const Form: React.FC<FormProps> = ({ data }) => {
  const [modifiedData, setModifiedData] = useState(data);

  const updateProperty = (path: string[], value: any, obj: any) => {
    if (path.length === 1) {
      obj[path[0]] = value;
    } else {
      const [currentKey, ...rest] = path;
      if (!obj[currentKey]) obj[currentKey] = {};
      updateProperty(rest, value, obj[currentKey]);
    }
  };

  const renderInputs = (obj: any, path: string[]) => {
    const inputs: JSX.Element[] = [];

    for (const key in obj) {
      const outerValue = obj[key];
      const inputKey = path.length === 0 ? key : `${path.join('.')}.${key}`;
      const label = path.length === 0 ? key : `${path.join('.')}.${key}`;
      const dataValue = inputKey
        .split('.')
        .reduce((p, c) => (p && p[c]) || null, modifiedData);

      // eslint-disable-next-line no-continue
      if (label === 'creationDate') continue;
      if (typeof outerValue === 'object' && outerValue !== null) {
        inputs.push(
          <div key={inputKey}>
            <h4>{label}</h4>
            {renderInputs(outerValue, [...path, key])}
          </div>
        );
      } else {
        inputs.push(
          <div key={inputKey}>
            <label htmlFor={inputKey}>{label}</label>
            <textarea
              id={inputKey}
              value={dataValue}
              onChange={(e) => {
                const { value } = e.target;
                const newData = { ...modifiedData };
                updateProperty(inputKey.split('.'), value, newData);
                setModifiedData(newData);
              }}
              onInput={handleTextareaInput}
              onMouseMove={handleTextareaInput}
            />
          </div>
        );
      }
    }

    return inputs;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await postContentData(modifiedData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contentForm}>
      {renderInputs(data, [])}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
