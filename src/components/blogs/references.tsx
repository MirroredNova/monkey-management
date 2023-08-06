import React from 'react';
import Link from 'next/link';
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
          <Link href={reference}>{reference}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default References;
