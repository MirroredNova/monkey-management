import React from 'react';
import styles from './styles.module.css';

const page = () => (
  <div className={styles.formContainer}>
    <div className={styles.formWrapper}>
      <h1>Admin Login</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Submit</button>
    </div>
  </div>
);

export default page;
