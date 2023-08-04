import React from 'react';
import styles from './references.module.css';

type Props = {
  referencesList: string[];
};

const References = ({ referencesList }: Props) => (
  <div className={styles.referenceContainer}>
    <h2>References</h2>
    <ul>
      {referencesList.map((reference, index) => (
        <li key={index}>
          <span>{index + 1}.</span>
          <a href={reference}>{reference}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default References;
