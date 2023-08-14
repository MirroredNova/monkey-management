import React from 'react';
import styles from './aboutText.module.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
};

const aboutText = ({ content }: Props) => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h3>{content.about.heading}</h3>
      {content.about.paragraphs.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    IA
  </div>
);

export default aboutText;
